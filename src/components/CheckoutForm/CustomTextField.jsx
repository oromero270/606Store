import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
const { control } = useFormContext();
return (
    <>
        <Grid>
        <Controller
            render={({ field }) => (
            <TextField {...field} label={label} fullWidth required />
            )}
            control={control}
            name={name}
            defaultValue=""
        />
        </Grid>
    </>
    );
};

export default FormInput;
