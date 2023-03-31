import "./index.scss";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Pay from "../Pay/Pay";


const Modal = ({data, onClose = () => {}}) => { 
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
    <div className="modal">
        <div className="container">
            <img src={data.imgPathDetail} alt={data.title} className="container-img"/>
            <div className="modal__right">
                <h2 className="cart">Meu carrinho</h2>
                <button className="close-button" onClick={onClose}></button>
                    <p className="item-title">{data.title}</p>
                    <h2 className="item-price">{data.price}</h2>
                    <p className="item-name-color">
                    Cor:{" "}
                    {data.colors.length === 1
                    ? data.colors.map((color, index) => (
                        <span key={index}>{color}</span>
                        ))
                    : data.colors.map((color, index) =>
                        index + 1 === data.colors.length ? (
                            <span key={index}>{color}</span>
                        ) : (
                            <span key={index}>{color}, </span>
                        )
                        )}
                    </p>
                    <div className="colors-products">
                    {data.colors.map((color) => (
                    <div
                        style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: color,
                        border: "1px solid black",
                        

                        }}
                    ></div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="button-buy">
                        <Link to={`/home`}>Continuar Comprando </Link>
                    </button>

                    <button className="button-finish" onClick={() => setIsModalVisible(true)}>Finalizar Compra</button>

                    {
                        isModalVisible ? <Pay onClose={ () => setIsModalVisible(false)} data={data}/>
                        : null
                    }

                    </div>
                </div>
            </div>
        </div>

  )
}

export default Modal;