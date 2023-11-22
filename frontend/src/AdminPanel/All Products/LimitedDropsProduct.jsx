import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { useAddLimitedDropsMutation } from '../../features/limitedDrops';
import * as Yup from 'yup';
import CloudinaryWidget from '../CloudinaryWidget';


function LimitedDropsProduct() {

    const [addLimitedDrops, { error }] = useAddLimitedDropsMutation();
    const [uploadedImages, setUploadedImages] = useState([])
    const [colors, setColors] = useState([]);
    const [variants, setVariants] = useState([]);
    const routeName = 'limitedDrops-description'

    const initialValues = {
        name: '',
        price: '',
        quantity: ''
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required(''),
        price: Yup.string().required(''),
        quantity: Yup.string().required('')
    });


    const handleImageUpload = (imageUrl) => {
        if (Array.isArray(imageUrl) && imageUrl.length > 0) {

            setUploadedImages(imageUrl);
            console.log(uploadedImages);
        } else {

            console.error('No images selected or an error occurred during image upload.');
        }
    };



    const handleAddColor = () => {
        const colorInput = document.getElementById('colorInput');
        const newColor = colorInput.value;

        if (newColor.trim() !== '') {
            setColors((prevColors) => [...prevColors, newColor]);
            colorInput.value = '';

        }
    };

    const handleRemoveColor = (colorIndex) => {
        setColors((prevColors) => prevColors.filter((color, index) => index !== colorIndex));
    };

    const handleAddVariant = () => {
        const sizeInput = document.getElementById('sizeInput');
        const stockInput = document.getElementById('stockInput');
        const newSize = sizeInput.value;
        const newStock = stockInput.value;

        if (newSize.trim() !== '' && newStock.trim() !== '') {
            setVariants((prevVariants) => [...prevVariants, { size: newSize, stock: newStock }]);

            sizeInput.value = '';
            stockInput.value = '';
        }
    };

    const handleRemoveVariant = (variantIndex) => {
        setVariants((prevVariants) => prevVariants.filter((_, index) => index !== variantIndex));
    };


    const handleSubmit = async (values, { resetForm }) => {


        const newProduct = {
            name: values.name,
            price: values.price,
            quantity: values.quantity,
            productId: routeName,
            img: uploadedImages,
            colors: colors,
            variants: variants
        }
        try {
            await addLimitedDrops(newProduct);
            resetForm();
            setColors([]);
            setVariants([]);
            setUploadedImages([]);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="login-wrapper p-5">
            <div className="container">
                <div className="row">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ errors, touched, values }) => (
                            <Form className="form">
                                <h1 className="h3 mb-3 fw-normal text-center text-uppercase heading">Add Product <strong>Limited Drop</strong></h1>
                                <div className="display">
                                    <div className="inside-form">
                                        <div className="d-flex">
                                            <div className="col-md-6 mx-2">
                                                <Field className='email p-1 my-2' type="text" placeholder='Name' name="name" />
                                                {errors.name && <ErrorMessage className="error-message" name="name" component="div" />}
                                            </div>
                                            <div className="col-md-6 mx-2">
                                                <Field className='password p-1 my-2' type="text" placeholder='Price' name="price" />
                                                {errors.price && <ErrorMessage className="error-message" name="price" component="div" />}
                                            </div>
                                        </div>
                                        <div className="mx-2">
                                            <Field className='password p-1 my-2' type="text" placeholder='Quantity' name="quantity" />
                                            {errors.quantity && <ErrorMessage className="error-message" name="quantity" component="div" />}
                                        </div>
                                        
                                        <div className='d-flex my-2'>
                                            <div className="col-md-6 mx-2">
                                                <input type="text" id="colorInput" placeholder="Enter color name" className='p-1' />
                                            </div>

                                            <button type="button" className='rounded-2 bg-transparent' style={{ width: '5%', borderRadius: '4px' }} onClick={handleAddColor}> <i class="bi bi-plus-circle-fill ms-2 text-dark"></i></button>
                                        </div>
                                        <ul className='m-0 p-0'>
                                            {colors.map((color, index) => (
                                                <li key={index} className="ms-4 my-2 " style={{ textDecoration: 'none', listStyleType: 'number' }}>
                                                    {color}
                                                    <button type="button" onClick={() => handleRemoveColor(index)} className="ms-5 py-1" style={{ width: '5%', borderRadius: '4px' }}><i class="bi bi-trash"></i></button>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='d-flex my-2'>
                                            <div className="col-md-6 mx-2">
                                                <input type="text" id="sizeInput" placeholder="Enter size" className='p-1 mb-1' />
                                                <input type="number" id="stockInput" placeholder="Enter stock" className='p-1 mb-1' />
                                            </div>

                                            <button type="button" className='rounded-2 bg-transparent' style={{ width: '5%', borderRadius: '4px' }} onClick={handleAddVariant}> <i class="bi bi-plus-circle-fill ms-2 text-dark"></i></button>
                                        </div>
                                        <ul>
                                            {variants.map((variant, index) => (
                                                <li key={index} className="ms-4 my-2 " style={{ textDecoration: 'none', listStyleType: 'number' }}>
                                                    Size: {variant.size}, Stock: {variant.stock}
                                                    <button type="button" onClick={() => handleRemoveVariant(index)} className="ms-5 py-1" style={{ width: '5%', borderRadius: '4px' }}><i class="bi bi-trash"></i></button>
                                                </li>
                                            ))}
                                        </ul>

                                        <CloudinaryWidget onImageUpload={(imageUrl) => handleImageUpload(imageUrl)} />
                                        <button className='login-btn my-3 p-2 py-2' type="submit">ADD</button>
                                    </div>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default LimitedDropsProduct;
