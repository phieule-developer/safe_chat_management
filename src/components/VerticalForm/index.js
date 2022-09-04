import React from 'react';
import { useForm } from 'react-hook-form';


export const VerticalForm = ({ defaultValues, resolver, children, onSubmit, formClass }) => {

    const methods = useForm({ defaultValues, resolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
            {Array.isArray(children)
                ? children.map((child) => {
                    return child.props && child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                key: child.props.name,
                                errors,
                                control,
                            },
                        })
                        : child;
                })
                : children}
        </form>
    );
};