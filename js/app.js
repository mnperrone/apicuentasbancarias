const URLGET = "https://api.npoint.io/e9cb7acc6095dff4004a";

$(document).ready(() => {
	$.get(URLGET, function (respuesta, estado) {
		if (estado === "success") {
			let arrayTipos = respuesta.tipos;
            console.log(arrayTipos);
			let arrayCuentas = respuesta.cuentas;
            console.log(arrayCuentas);
            let arrayFiltrado = arrayCuentas.filter(function (dato) {return dato.type !==8  } );
            console.log(arrayFiltrado);
            let array1A5 = arrayFiltrado.slice(0,5);
            console.log(array1A5);
            let array6A10 = arrayFiltrado.slice(5,10);
            console.log(array6A10);

			for (const dato of array1A5) {

				let tipo = arrayTipos.find((item) => item.id === dato.type);
				if (tipo) tipo = tipo.nombre;
				else tipo = "Cuenta no encontrada";

                let indice = tipo.indexOf(" en");
                let tipoExtraido = tipo.substring(0, indice);
                
				$(".cuentas").append(
					`<div class="countCard">
                        <h4>${tipoExtraido}</h4>
                        <p class="tipo">Nro: ${dato.number}</p>
                    </div>`
				);
                
			}
            for (const dato of array6A10) {

				let tipo = arrayTipos.find((item) => item.id === dato.type);
				if (tipo) tipo = tipo.nombre;
				else tipo = "Cuenta no encontrada";

                let indice = tipo.indexOf(" en");
                let tipoExtraido = tipo.substring(0, indice);
                

				$(".cuentas").append(
					`<div class="countCards">
                        <h4>${tipoExtraido}</h4>
                        <p class="tipo">Nro: ${dato.number}</p>
                    </div>`
				);
			}
            $('.cuentas').append(`<div class="mostrarMas">Mostrar Más >></div>`);
                $('.mostrarMas').click(function () { 
                $('.countCards').show(); 
                $('.mostrarMas').hide();               
            });
            
		}
	});
});
