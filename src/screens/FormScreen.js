import React, { useState } from 'react';
import {useFormik} from 'formik';
import {View, Form, Text, Label, Item, Input, Picker, Button} from 'native-base';

function FormScreen() {

    const {values, isSubmitting, setFieldValue, handleSubmit, errors } = useFormik({
        initialValues:{
            name:'',
            phone: '',
            birthday:'',
            country:'',
        },
        onSubmit: values =>{
            alert('hey');
        },
        validate: values=>{
            const errors={};
            if(!values.name || values.name.length<2) errors.name= "nombre invalido";
            if(!values.phone || values.phone.length<9) errors.name= "phone invalido";

            return errors;
        }
    });

    return (
        <View>
            <Form>
                <Item error={errors.name ? true : false}>
                    <Label>nombre</Label>
                    <Input 
                        value={values.name}
                        onChangeText={text=>setFieldValue('name', text)}
                    />
                    <Text>{errors.name ? errors.name : ''}</Text>
                </Item>
                <Item>
                    <Label>Phone</Label>
                    <Input 
                        value={values.phone}
                        onChangeText={text=>setFieldValue('phone', text)}
                    />
                </Item>
                <Item>
                    <Label>Fecha de nacimiento</Label>
                    <Input 
                        value={values.birthday}
                        onChangeText={text=>setFieldValue('birthday', text)}
                    />
                </Item>
                <Item>
                    <Label>Pais</Label>
                    <Picker onValueChange={value=> setFieldValue('country', value)} selectedValue={values.country} >
                        <Picker.Item label="Mexico" value="Mexico" />
                        <Picker.Item label="Spain" value="Spain" />
                    </Picker>
                </Item>
                <Button onPress={handleSubmit} >
                    <Text>Enviar</Text>
                </Button>
            </Form>
        </View>
    );
}

export default FormScreen;