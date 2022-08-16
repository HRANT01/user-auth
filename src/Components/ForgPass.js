import React from "react";
import { useForm } from "react-hook-form"


function ForgPass() {
    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
        getValues,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        if (isValid()) {
            alert(`Karen aper chjogi es kodi mej inch fetch() eir uzum dra hamar,
            AYSTEX KAROX E LINEL DZER GOVAZD@ kam <<fetch() REQUEST>>`.replace('  ', ''), JSON.stringify(data));
            reset();
        }
    }

    const isValid = function () {
        const [value1, value2] = [getValues("nPass"), getValues("cPass")];
        // if(!value2) {
        //     return true;
        // }

        return value1 === value2;
    }

    return (
        <div className="App">
            <form className='formin' onSubmit={handleSubmit(onSubmit)}>
                <h1>Reset Password</h1><hr />
                <label>eMail</label>
                <input {...register("mail", {
                    required: "Required field!",
                    pattern: "",
                })} ></input><br />

                <div className="errMess">{errors?.mail && <span>{errors?.mail?.message}</span>}</div>

                <label>New Password</label>
                <input {...register("nPass", {
                    required: "Required field!",
                    minLength: {
                        value: 5,
                        message: "Pass should be at least 5 symbols"
                    }
                })}></input><br />

                <div className="errMess">{errors?.nPass && <span>{errors?.nPass?.message}</span>}</div>

                <label>Confirm Password</label>
                <input {...register("cPass", {
                    required: "Required field!",
                })}></input><br />

                <div className="errMess">{errors?.cPass && <span>Required field!</span>}</div>
                <div className="errMessMatch">{!isValid() && <span>Passwords don't match</span>}</div>

                <button className='btn'>Send Request</button><br />
            </form>
        </div>
    )
}

export default ForgPass;