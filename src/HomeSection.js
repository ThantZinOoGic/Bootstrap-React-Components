import React from 'react'
import image from'./image.jpg';
import './image.css'
export default function  HomeSection() {
  return (
    <div className='col-12 mx-auto d-flex justify-content-between'>
        <div class="card col-6 mt-3 mx-3 shadow">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </div>
        <div class="card col-5 mt-3 mx-3 shadow">
            <div class="card-body">
                <img src={image} className='img-thumbnail'/>   
            </div>
        </div>
    </div>
  )
}
