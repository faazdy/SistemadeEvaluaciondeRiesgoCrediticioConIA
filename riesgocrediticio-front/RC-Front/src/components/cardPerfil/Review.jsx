import React from 'react'
import "./style.css"

function Review() {
    return (
        <div class=" inicio-Perfil">
            <header class=" inicio-Perfil-header">
                <p>Actualizacion 02/02/2025 </p>
                <span class="title">Riesgo Regular</span>
                <br /> <br /> Tiene algunos pagos tardíos ocasionales.Su
                endeudamiento es moderado respecto a ingresos. Probabilidad
                razonable de cumplir obligaciones.
            </header>
            <div class=" inicio-Perfil-author">
                <a class="author-avatar" href="#">
                    <span></span>
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <div class="author-name">
                    <div class="author-name-prefix">Harold</div> estibenson
                </div>
            </div>
            <div class="tags">
                <a href="#">21 años</a>
            </div>
        </div>
    )
}

export default Review
