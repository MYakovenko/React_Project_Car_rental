import React from 'react'

const itemsArray = [
    {title: "Easy booking", id: 0, img: "img/like1.png", text: 'Simple, few steps online booking'},
    {title: "Quality vehicles", id: 1, img: "img/high-quality.png", text: 'High quality rental vehicles from a wide range of categories, models and brands.'},
    {title: "GPS Navigation", id: 2, img: "img/navigation1.png", text: 'Find the most appropriate route with our GPS navigation system.'},
    {title: "Child seat", id: 3, img: "img/baby.png", text: 'It is important that our child is the most secure during the journey.'},
    {title: "AT / MT transmission", id: 4, img: "img/transmission1.png", text: 'You can choose a manual or automatic transmission car.'},
    {title: "Wi-Fi", id: 5, img: "img/wifi2.png", text: 'Stay connected with the internet wherever you go with choosing your car Wi-Fi router.'}
]

export default () => (
    <div className = "icons-table">
        {itemsArray.map( elem =>
            <div key = {elem.id} className = "offer-item">
                <img className = "offer-img" src = {elem.img} alt={elem.title}/>
                <div className = "offer-text-wrapper">
                    <div className = "offer-title">{elem.title}</div>
                    <div className = "offer-text">{elem.text}</div>
                </div>
            </div>
        )}
  </div>
)