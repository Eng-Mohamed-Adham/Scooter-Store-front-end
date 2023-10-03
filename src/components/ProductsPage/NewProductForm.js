import {useAddNewProductMutation} from '../../features/Products/ProductsApiSlice'
import {useGetCategoriesQuery} from '../../features/categories/categoriesApiSlice'
import { ROLES } from '../../config/roles'


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { 
  Box,
  ButtonGroup,
  Grid,
  MenuItem, 
  TextField,
  TextareaAutosize,
} from '@mui/material'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
const NewProductForm = () => {

  const [addNewProduct,{isLoading,isSuccess}] = useAddNewProductMutation();

    const navigate = useNavigate()

     
    
    const [product_Id,setProduct_Id] = useState()
    const [product_name,setProduct_name] = useState()
    const [imgs,setImgs] = useState([])
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [price,setPrice] = useState()
    const [rate,setRate] = useState()
    const [vilable,setVilable] = useState(true)
    const [count,setCount] = useState()
    const [colors,setColors] = useState([])
    const [category_Id, setCategory_Id] = useState()


    const {
      data:category,
  } = useGetCategoriesQuery(undefined, {
      pollingInterval: 15000,
      refreshOnFocus: true,
      refreshOnMountOrArgChange: true
  })


    useEffect(()=> {

      if(isSuccess){
        console.log('Yes is Success....')
        // setCategory_Id()
        // setColors([])
        // setCount()
        // setImgs([])
        // setProduct_Id()
        // setProduct_name()
        // setTitle()
        // setDescription()
        // setPrice()
        // setRate()
        // setVilable()
        navigate("/products")
      }
    },[isSuccess,navigate])
  
   


    const onProduct_IdChange = (e) => setProduct_Id(e.target.value)  
    const onProduct_nameChange = (e) => setProduct_name(e.target.value)
    const ontitleChange = (e) => setTitle(e.target.value)
    const ondescriptionChange = (e) => setDescription(e.target.value)
    
    const oncountChange = (e) => setCount(e.target.value)
    const oncolorChange = (e) => {
      const newValue = e.target.value
      const newValues = newValue.split('\n').filter((value) => value.trim() !== '');
      setColors(newValues)
    }
    const onpriceChange = (e) => setPrice(e.target.value)
    const onrateChange = (e) => setRate(e.target.value)
    const onvilableChange = (e) => setVilable(e.target.value)
    const oncategory_IdChange = (e) => setCategory_Id(e.target.value)

    // convert image src from buffer to base4
    function convertToBase64(file) {
      return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
              resolve(fileReader.result)
          };
          fileReader.onerror = (error) => {
              reject(error)
          }
      })
  }
  //   handel image file to upload 
  const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      // console.log(base64)
      setImgs([...imgs, base64]);
  }


    let canSave = 
    [product_Id,product_name,title,description,price,rate,vilable,count,colors,category_Id].every(Boolean) && !isLoading


    const handelSubmit = async (e) => {
      e.preventDefault();
      if(canSave){
        await addNewProduct({product_Id,product_name,imgs,title,description,price,rate,vilable,category_Id,count,colors})
      }

    }

    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });

    const currencies = [
      { 
        value:'true',
        label:'Yes'
      },
      { 
        value:'fales',
        label:'No'
      }
    ]


    const content = (
      <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        padding:'20px',
        gap:'20px',

      }}
      >
        <form
        style={{
          display:'grid',
          // flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          margin:'auto',
          padding:'20px',
          gap:'20px',
          gridTemplateColumns:'auto auto'
        }}
        onSubmit={(e) => e.preventDefault()}>
        <TextField 
          id="product_Id"
          name="Product_Id"
          label="product_Id"
          type="number"
          variant="outlined"
          onChange={onProduct_IdChange}

          />
          <TextField 
            id="product_name"
            name="Product_name"
            label="product_name"
            type="text"
            variant="outlined"
            onChange={onProduct_nameChange}

          />
            <TextField 
            id="title"
            name="Title"
            label="title"
            type="text"
            variant="outlined"
            onChange={ontitleChange}

          />
            <TextField 
            id="description"
            name="Description"
            label="description"
            type="text"
            variant="outlined"
            onChange={ondescriptionChange}

          />
          <TextField 
            id="count"
            name="Count"
            label="count"
            type="number"
            variant="outlined"
            onChange={oncountChange}

          />
          <TextField 
            id="price"
            name="Price"
            label="price"
            type="text"
            variant="outlined"
            onChange={onpriceChange}

          />
          <TextField 
            id="rate"
            name="Rate"
            label="rate"
            type="number"
            variant="outlined"
            onChange={onrateChange}

          />
          <TextField
          id="vilable"
          select
          label="Vilable"
          defaultValue="true"
          SelectProps={{
            native: true,
          }}
          onChange={onvilableChange}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
          <TextField 
            id="category_Id"
            name="Category_Id"
            label="category_Id"
            type="number"
            variant="outlined"
            onChange={oncategory_IdChange}

          />
       <TextareaAutosize
        aria-label="Colors"
        placeholder="write every Color in a New Line"
        // minRows={3}
        onChange={oncolorChange}
        value={colors.join('\n')}
      />
        

          <ButtonGroup
          sx={{
            display:'grid',
            gridTemplateColumns:'auto auto',
            gap:'20px'
          }}
          >
            <Button 
            component="label" 
            variant="contained" 
            startIcon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            onChange={(e) => handleFileUpload(e)}
            >
                img1
              <VisuallyHiddenInput 
                type="file" 
              />
            </Button>
            <Button 
            component="label" 
            variant="contained" 
            startIcon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            onChange={(e) => handleFileUpload(e)}
            >
                img2
              <VisuallyHiddenInput 
                type="file" 
              />
            </Button>
      
        </ButtonGroup>
        <ButtonGroup
         sx={{
          display:'grid',
          gridTemplateColumns:'auto auto',
          gap:'20px'
        }}
        >
        <Button 
            component="label" 
            variant="contained" 
            startIcon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            onChange={(e) => handleFileUpload(e)}
            >
                img3
              <VisuallyHiddenInput 
                type="file" 
              />
            </Button>
            <Button 
            component="label" 
            variant="contained" 
            startIcon={<FontAwesomeIcon icon={faCloudArrowUp} />}
            onChange={(e) => handleFileUpload(e)}
            >
                img4
              <VisuallyHiddenInput 
                type="file" 
              />
            </Button>
        </ButtonGroup>

          <Button 
          onClick={handelSubmit}
          variant="contained"

          >
            Confirm
          </Button>
        </form>
      </Box>
    )

  return content
}

export default NewProductForm
