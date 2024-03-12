/// <reference types="react" />
import { FormikValues, FormikHelpers } from "formik";
type FormProps<T extends FormikValues> = {
    initialValues: T;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    validationSchema?: any;
    validateOnChange?: boolean;
};
export declare function useForm<T extends FormikValues>({ initialValues, onSubmit, validationSchema, validateOnChange, }: FormProps<T>): {
    form: {
        initialValues: T;
        initialErrors: import("formik").FormikErrors<unknown>;
        initialTouched: import("formik").FormikTouched<unknown>;
        initialStatus: any;
        handleBlur: {
            (e: import("react").FocusEvent<any, Element>): void;
            <T_1 = any>(fieldOrEvent: T_1): T_1 extends string ? (e: any) => void : void;
        };
        handleChange: {
            (e: import("react").ChangeEvent<any>): void;
            <T_1 = string | import("react").ChangeEvent<any>>(field: T_1): T_1 extends import("react").ChangeEvent<any> ? void : (e: string | import("react").ChangeEvent<any>) => void;
        };
        handleReset: (e: any) => void;
        handleSubmit: (e?: import("react").FormEvent<HTMLFormElement> | undefined) => void;
        resetForm: (nextState?: Partial<import("formik").FormikState<T>> | undefined) => void;
        setErrors: (errors: import("formik").FormikErrors<T>) => void;
        setFormikState: (stateOrCb: import("formik").FormikState<T> | ((state: import("formik").FormikState<T>) => import("formik").FormikState<T>)) => void;
        setFieldTouched: (field: string, touched?: boolean | undefined, shouldValidate?: boolean | undefined) => Promise<import("formik").FormikErrors<T>> | Promise<void>;
        setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<import("formik").FormikErrors<T>> | Promise<void>;
        setFieldError: (field: string, value: string | undefined) => void;
        setStatus: (status: any) => void;
        setSubmitting: (isSubmitting: boolean) => void;
        setTouched: (touched: import("formik").FormikTouched<T>, shouldValidate?: boolean | undefined) => Promise<import("formik").FormikErrors<T>> | Promise<void>;
        setValues: (values: import("react").SetStateAction<T>, shouldValidate?: boolean | undefined) => Promise<import("formik").FormikErrors<T>> | Promise<void>;
        submitForm: () => Promise<any>;
        validateForm: (values?: T | undefined) => Promise<import("formik").FormikErrors<T>>;
        validateField: (name: string) => Promise<void> | Promise<string | undefined>;
        isValid: boolean;
        dirty: boolean;
        unregisterField: (name: string) => void;
        registerField: (name: string, { validate }: any) => void;
        getFieldProps: (nameOrOptions: string | import("formik").FieldConfig<any>) => import("formik").FieldInputProps<any>;
        getFieldMeta: (name: string) => import("formik").FieldMetaProps<any>;
        getFieldHelpers: (name: string) => import("formik").FieldHelperProps<any>;
        validateOnBlur: boolean;
        validateOnChange: boolean;
        validateOnMount: boolean;
        values: T;
        errors: import("formik").FormikErrors<T>;
        touched: import("formik").FormikTouched<T>;
        isSubmitting: boolean;
        isValidating: boolean;
        status?: any;
        submitCount: number;
    };
};
export {};
