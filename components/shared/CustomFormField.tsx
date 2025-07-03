import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";
import { FormFieldType } from "../forms/CreateJobForm";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const Renderfield = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    placeholder,
    renderSkeleton,
    icon,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border">
           {icon && (
            <span className="mx-2 flex items-center">
              {icon}
            </span>
          )}

          <FormControl className="h-full">
            <Input
              placeholder={placeholder}
              {...field}
              className="h-11 border-0 focus-visible:ring-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.SELECT:
      return (
        <FormControl className="w-full min-w-full">
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content w-full min-w-full">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            className="shad-textArea"
            {...field}
            disabled={props.disabled}
          />
        </FormControl>
      );

    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
    const { control, name, label } = props;
  return (
     <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {label && (
            <FormLabel>{label}</FormLabel>
          )}

          <Renderfield field={field} props={props} />

          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  )
};

export default CustomFormField;
