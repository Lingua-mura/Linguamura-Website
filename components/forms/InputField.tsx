import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';
import { Input } from "@/components/ui/input"; // Assuming you have InputProps defined in your input component
import { Label } from "@/components/ui/label";
import './style.css';

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  labelFontSize?: string;
  className?: string;
  spaceY?: boolean;
  variant?: 'free' | 'condensed';
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  isInvalid?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      labelFontSize,
      className = '',
      spaceY = true,
      variant = 'free',
      prefixIcon,
      suffixIcon,
      isInvalid,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div
        className={`form-group bg-slate-100 ${isInvalid ? 'invalid' : ''} ${
          !spaceY ? '' : variant === 'free' ? 'mt-12' : 'mt-5'
        } ${className}`}
      >
        {label && (
          <Label
           style={{background: "white"}}
            className={`bg-transparent font-medium text-black ${
              variant === 'condensed' ? '-top-3' : '-top-7 -ml-4'
            }  px-2 ${labelFontSize || 'text-sm'}`}
          >
            {label} {props.required ? <span className="text-error">*</span> : ''}
          </Label>
        )}
        {prefixIcon && (
          <span className="select-none -ml-1 mr-1">{prefixIcon}</span>
        )}
        <Input
          {...props}
          ref={ref}
          type={showPassword ? 'text' : props.type}
          placeholder={props.placeholder}
          className={`focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-neutral bg-transparent border-none w-full z-10`}
        />
        {suffixIcon && <span className="select-none ml-1 icon-btn">{suffixIcon}</span>}
        {props.type === 'password' && (
          <button
            type="button"
            className="select-none icon-btn -mr-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    );
  },
);

export default InputField;
