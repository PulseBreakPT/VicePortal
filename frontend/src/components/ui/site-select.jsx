import {useState} from 'react';
import {Check,ChevronDown} from 'lucide-react';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from './select';
import {Popover,PopoverTrigger,PopoverContent} from './popover';
import {Command,CommandInput,CommandList,CommandEmpty,CommandItem} from './command';

// Controlled website-only selectors. Empty application values are encoded for Radix.
const encode=value=>'option:'+String(value);
const normalize=options=>options.map(option=>Array.isArray(option)?{value:option[0],label:option[1]}:typeof option==='string'?{value:option,label:option}:option);
export function SiteSelect({label,value,onChange,options,testId,searchable=false,placeholder='Choose an option'}){
 const [open,setOpen]=useState(false);
 const choices=normalize(options);
 const selected=choices.find(option=>option.value===value);
 if(searchable)return <Popover open={open} onOpenChange={setOpen}>
   <PopoverTrigger asChild><button type="button" className="site-select-trigger site-combobox-trigger" aria-label={label} data-testid={testId}><span>{selected?.label||placeholder}</span><ChevronDown size={16}/></button></PopoverTrigger>
   <PopoverContent className="site-ui-surface site-command-popover" align="start" sideOffset={6} collisionPadding={12} data-lenis-prevent onOpenAutoFocus={event=>event.preventDefault()}>
    <Command className="site-command" label={label}>
     <CommandInput aria-label={'Search '+label} placeholder="Search entries..." className="site-command-input"/>
     <CommandList className="site-command-list" data-lenis-prevent><CommandEmpty>No matches.</CommandEmpty>
       {choices.map(option=><CommandItem key={encode(option.value)} value={encode(option.value)} keywords={[option.label]} disabled={option.disabled} onSelect={()=>{onChange(option.value);setOpen(false);}} className="site-command-item"><span>{option.label}</span>{value===option.value&&<Check size={16} aria-hidden="true"/>}</CommandItem>)}
     </CommandList>
    </Command>
   </PopoverContent>
 </Popover>;
 return <Select value={selected?encode(value):''} onValueChange={key=>{const option=choices.find(item=>encode(item.value)===key);if(option&&!option.disabled)onChange(option.value);}}>
   <SelectTrigger className="site-select-trigger" aria-label={label} data-testid={testId}><SelectValue placeholder={placeholder}/></SelectTrigger>
   <SelectContent className="site-ui-surface site-select-content" position="popper" sideOffset={6} collisionPadding={12} data-lenis-prevent>
    {choices.map(option=><SelectItem key={encode(option.value)} value={encode(option.value)} disabled={option.disabled} className="site-select-item">{option.label}</SelectItem>)}
   </SelectContent>
 </Select>;
}
