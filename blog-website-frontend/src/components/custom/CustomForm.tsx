/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    useForm,
} from 'react-hook-form'

// types
type TFormConfig = {
    defaultValues?: Record<string, any>
    resolver?: any
}

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>
    children: ReactNode
} & TFormConfig
export const CustomForm = ({
    onSubmit,
    children,
    defaultValues,
    resolver,
}: TFormProps) => {
    const formConfig: TFormConfig = {}
    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues
    }
    if (resolver) {
        formConfig['resolver'] = resolver
    }
    const methods = useForm(formConfig)
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    )
}
