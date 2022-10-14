import React from 'react'
import ProductData from '../productData';
import Classes from './ProductDetails.module.css'


const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item,pos)=>{
    const classArr = [Classes.productImage];
    if(pos==props.currentpreviewimagepos){
      classArr.push(Classes.Selectedproductimage)
    }
    return(
    <img key={pos} onClick = {() =>props.changeurlofimage(pos)} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}/>
    )
  })

  
  const Featureitems = props.data.featureList.map((items,pos)=>{
    const Btns = [Classes.Featureitem]
    if(pos==1 && props.Showheartbeat){
      Btns.push(Classes.SelectedFeatureitem)
    }else if(pos==0 && !props.Showheartbeat){
      Btns.push(Classes.SelectedFeatureitem)
    }
   return ( <button onClick={()=>props.onclickfeatureitem(pos)} key={pos} className={Btns.join(' ')}>{items}</button>)
  })
  // console.log(props.data)
    return(
        <div className={Classes.productData}>
            <h1 className={Classes.productTitile}>{props.data.title}</h1>
          <p className={Classes.description}>{props.data.description}</p>
          <h3 className={Classes.sectionheading}>Select Color</h3>

          <div className={Classes.smallImage}>
            {colorOptions}
            <h3 className={Classes.sectionheading}>Features</h3>
          <div>
            {/* <button className={[Classes.Featureitem,Classes.SelectedFeatureitem].join(' ')}>Time</button> */}
            {Featureitems}
            {/* <button className={Classes.Featureitem}>Heart Beat</button> */}
          </div>

            <button className={Classes.primarybtn}>Buy Now</button>
          
        </div>
        </div>
    )
}


export default ProductDetails