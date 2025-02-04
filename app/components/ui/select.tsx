import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, options, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <select
        className="appearance-none w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-8 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
        ref={ref}
        {...props}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  )
})

Select.displayName = "Select"

export { Select }

