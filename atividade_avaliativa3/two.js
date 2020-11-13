const usuario = {
    "autor": "Demetrio Mestre",
    "endereco": {
        "rua": "Rua Qualquer",
        "suite": "JS",
        "cidade": "Campina Grande",
        "CEP": "581415-145",
            "geo": {
                "lat": "13.51",
                "lng": "52.54"            
            }
        }
}
    



const resultado = `${usuario.autor} - ${usuario.endereco.cidade} (${usuario.endereco.geo.lat}, ${usuario.endereco.geo.lng})`;
console.log(resultado);