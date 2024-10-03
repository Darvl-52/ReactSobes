import React from 'react';

const Input = ({input, register, errors, modal, setModal}) => {

    return (
        <>
            {input.map((input, index) =>
                <div className="data__right-form--block" key={index}>
                    <p className="data__right-text">
                        {input.title}
                    </p>
                    <input name='value'
                           type={input.type}
                           className="data__right-input"
                           placeholder={input.placeholder}
                           defaultValue={input.value}
                           {...register(`${input.register}`, {required: true})}
                           aria-invalid={!!errors[input.register]}
                    />
                    {errors[input.register] && <p style={{color: 'red', fontSize: '14px', marginTop:'8px'}}>Поле ввода не может быть пустым!</p>}
                </div>
            )}
            <div className="data__right-wrapper">
                <button className="data__right-save"  onClick={() => {
                    if (Object.values(errors).length === 0) {
                        setModal(true)
                    }
                }}>
                    Сохранить
                </button>
            </div>
        </>
    );
};

export default Input;