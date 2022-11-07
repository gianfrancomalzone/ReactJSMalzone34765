const data = [
{
    "id": 1,
    "titulo": "Cronos",
    "precio": 20170,
    "stock": 1,
    "marca": "Fiat",
    "category": "sedan",
    "description": "El Fiat Cronos es un automóvil de turismo del segmento B producido en Argentina para Latinoamérica desde inicios del año 2018, por FCA. El modelo reemplaza de forma directa al sedán del Fiat Punto, el Fiat Linea, y al sedán del Fiat Palio nuevo, el Fiat Grand Siena que aun continua en producción para ventas especiales en Brasil.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.plPZy5CntrvUqnlgZJCxVwHaEK%26pid%3DApi&f=1&ipt=0e917ce113c568d6d54771f1e75eff6316be682a4577d2695e69552fd7b29293&ipo=images",
}, {
    "id": 2,
    "titulo": "Hilux",
    "precio": 18610,
    "stock": 7,
    "marca": "Toyota",
    "category": "camioneta",
    "description": "El Toyota Hilux es un Pickup mediano producido por Toyota en diversas partes del mundo. La Hilux es un pick up compacto producido y comercializado por Toyota. En Estados Unidos y Canadá, el nombre Hilux se retiró brevemente en 1976 en favor de nombres genéricos como Truck, Pickup Truck o Compact Truck, hasta que se remplazó por la Tacoma en 1995.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UKSgwdSg4D2bEvzfhKsRGgHaE7%26pid%3DApi&f=1&ipt=51e8eda1201a65ce67e29bd566b4c210792730b3d53c8dcb46e0de6ac2d13403&ipo=images",
}, {
    "id": 3,
    "titulo": "Amarok",
    "precio": 10700,
    "stock": 9,
    "marca": "Volkswagen",
    "category": "camioneta" ,
    "description": "Volkswagen Amarok es el nombre que lleva la camioneta Volkswagen, posee un motor delantero longitudinal y tracción trasera, o tracción en las cuatro ruedas y chasis independiente.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.X_aUt3Ip0T_ubhlcYLdyEAHaE8%26pid%3DApi&f=1&ipt=eb342f7d622955d7c9b1fe17daeeabf8285323c5a488d31eeda84119cc6985bc&ipo=images",
}, {
    "id": 4,
    "titulo": "208",
    "precio": 33920,
    "stock": 7,
    "marca": "Peugeot",
    "category": "sedan" ,
    "description": "El Peugeot 208 es un automóvil de turismo del segmento B producido por el fabricante francés Peugeot. Salió a la venta en marzo de 2012 en Europa y en 2013 en América con la finalidad de sustituir al Peugeot 207.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.IHNTiVPIXdbsYmOlLJ9lqQHaEK%26pid%3DApi&f=1&ipt=50909489b87f3cff0127b925cb2cb2a13c469627b342931171b2889aba2e0766&ipo=images",
}, {
    "id": 5,
    "titulo": "Gol Trend",
    "precio": 21150,
    "stock": 9,
    "marca": "Volkswagen",
    "category": "sedan" ,
    "description" : "El Volkswagen Gol es un automóvil del segmento B diseñado y producido en Brasil para América Latina por el fabricante alemán Volkswagen. Reemplazó al Volkswagen Brasilia y al Volkswagen Escarabajo como automóvil de bajo costo. El Gol es líder en ventas en el mercado brasileño desde hace más de veinte años.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3U49MszWiCnn3Qwv6Nt1dQHaFj%26pid%3DApi&f=1&ipt=2cb6b6eb85ec5916ed7bd68cf992f842503e76744827a9d75b43b51f5b842d6e&ipo=images",
}, {
    "id": 6,
    "titulo": "Ranger",
    "precio": 10240,
    "stock": 3,
    "marca": "Ford",
    "category": "camioneta" ,
    "description" : "Ford Ranger es un nombre usado en dos diferentes líneas de camionetas compactas fabricadas por la Ford Motor Company y por un acuerdo de comercialización con Mazda. Actualmente es la camioneta más vendida de Europa.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3_jbZiwSUyvXRG9WYC8uygHaEK%26pid%3DApi&f=1&ipt=5aea1d3cac3a70acfd63a07d6ac922d35f5179db33aa3f55466b5dff7e869bbf&ipo=images",
}, {
    "id": 7,
    "titulo": "Etios",
    "precio": 14840,
    "stock": 10,
    "marca": "Toyota",
    "category": "sedan" ,
    "description" : "El Toyota Etios es un automóvil del Segmento B, producido por el fabricante de automotores japonés Toyota, para el mercado automovilístico Indio desde el año 2010, para el Sudafricano y Brasileño desde 2012 y para Indonesia desde 2013. El nombre Etios proviene del griego Ethos, sgnificando espíritu, carácter e ideas.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6R6UsD4Q64dRjN3f-2bmCAHaEZ%26pid%3DApi&f=1&ipt=7ae651b1c725f5470543e38c76f5b5d0615d9e9702c6de823c15db19fb5f1345&ipo=images",
}, {
    "id": 8,
    "titulo": "Yaris RS",
    "precio": 56900,
    "stock": 7,
    "marca": "Toyota",
    "category": "rally" ,
    "description" : "El Toyota GR Yaris es una variante orientada al rendimiento de la serie XP210 Yaris supermini / subcompact hatchback , en un segmento comúnmente llamado hot hatch . El vehículo es fabricado por Toyota con la asistencia de la división Gazoo Racing (GR) de la compañía y se produce para cumplir con las normas de homologación del Campeonato Mundial de Rally (WRC).",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PRE7-wElDjpFdQ_sXaSoJQHaEA%26pid%3DApi&f=1&ipt=5eb02b808128e0bbb38cf09a939f28116ef0d393a7e24476e4b1a4124f4b8dee&ipo=images",
}, {
    "id": 9,
    "titulo": "Supra",
    "precio": 29360,
    "stock": 7,
    "marca": "Toyota",
    "category": "deportivo" ,
    "description" : "El Toyota Supra es un automóvil deportivo hatchback de 3 puertas con motor delantero montado longitudinalmente de tracción trasera, producido por el fabricante japonés Toyota desde 1979 hasta la actualidad. Hubo una pausa desde 2002 hasta su reinicio en 2019.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YYTfwASjxf_dhR2m2f1tQgHaE8%26pid%3DApi&f=1&ipt=7872d5c84f9a2da70263668fb74fddf85b33a65f15bf0a5ba74dd04744ee7347&ipo=images",
}, {
    "id": 10,
    "titulo": "Focus ST",
    "precio": 9950,
    "stock": 2,
    "marca": "Ford",
    "category": "deportivo" ,
    "description" : "El Ford Focus RS (Rallye Sport) era una versión de bajo volumen y alto rendimiento del Focus de primera generación, disponible en 21 países europeos. Se confirma la producción de un futuro Focus RS basado en el Focus de segunda generación.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._1AXNCgZjI7dR2yaoeX3xwHaEA%26pid%3DApi&f=1&ipt=c2ad16b8a1782a14a30d5970fa379203c85fa991bbcd04e4b028f9368582fe90&ipo=images",
}, {
    "id": 11,
    "titulo": "Prelude",
    "precio": 11730,
    "stock": 2,
    "marca": "Toyota",
    "category": "coupe" ,
    "description" : "El Honda Prelude es un automóvil producido por el fabricante de automóviles japonés Honda desde 1978 hasta 2001. El cupé de dos puertas se derivó libremente del Honda Accord y abarcó cinco generaciones. Honda utilizó el Prelude para presentar la cadena japonesa de ventas minoristas de Honda, Honda Verno , y el lanzamiento internacional del modelo siguió poco después.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.u107nC2atMzHhPFj1qza5AHaEO%26pid%3DApi&f=1&ipt=4dd4e5356ba828a390e12a40e45df4e1dd37857406f00d970885b47e7526babc&ipo=images",
}, {
    "id": 12,
    "titulo": "959",
    "precio": 45590,
    "stock": 7,
    "marca": "Porshe",
    "category": "rally" ,
    "description" : "El Porsche 959 es un automóvil deportivo fabricado por el fabricante de automóviles alemán Porsche de 1986 a 1993, primero como un automóvil de rally del Grupo B y luego como un automóvil de producción legal en carretera diseñado para satisfacer las normas de homologación de la FIA que requieren que se produzcan al menos 200 unidades. ",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zb8BRG_LwjhT1p4OpaHAlQHaE8%26pid%3DApi&f=1&ipt=f58024f7ad1e28f11ba081cd8e7099845ffa2bfd2d3b089d39e3a2df521e40a5&ipo=images",
}, {
    "id": 13,
    "titulo": "Impreza WRX STI",
    "precio": 49970,
    "stock": 6,
    "marca": "Subaru",
    "category": "rally" ,
    "description" : "El Subaru Impreza es un automóvil de turismo del segmento C producido por el fabricante japonés Subaru desde el año 1992. La segunda generación del Impreza fue lanzada en 2002, y la tercera fue presentada al público en 2007. Su principal rival de marcas japonés fue el Mitsubishi Lancer, hasta que éste dejó de ser competitivo a principios de los 00'.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CveDwleok8qP2jRHN0RfsQHaE8%26pid%3DApi&f=1&ipt=9c91e240725428d5fec7e0afc51c108f83984cbd59df9c57c912961732aecfc5&ipo=images",
}, {
    "id": 14,
    "titulo": "Escort RS1800",
    "precio": 30630,
    "stock": 3,
    "marca": "Ford",
    "category": "rally" ,
    "description" : "El Ford Escort es un automóvil familiar pequeño que fue fabricado por Ford Europa desde 1968 hasta 2000. En total hubo seis generaciones, repartidas en tres plataformas básicas, comenzando con el original Mk.1/Mk.2 de tracción trasera, la tracción delantera Erika Mk.3/Mk.4 (1980-1990) y la versión final CE-14 Mk.5/Mk.6 (1990-2002). Su sucesor, el Ford Focus, se lanzó en 1998, pero la generación final de Escort se eliminó gradualmente, y la versión furgoneta finalizó la producción en 2002 a favor de la Ford Transit Connect.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.j4yOzy5gi8chaR0d4QWouQHaFE%26pid%3DApi&f=1&ipt=04615f85953d4478d484ecfc0ce9daeb5151ae37163b0b6686a824329ecb6983&ipo=images",
}, {
    "id": 15,
    "titulo": "Lancer",
    "precio": 40960,
    "stock": 1,
    "marca": "Mitsubishi",
    "category": "rally" ,
    "description" : "El Lancer se ha comercializado como Colt Lancer, Dodge Colt, Plymouth Colt, Chrysler Valiant Lancer, Chrysler Lancer, Eagle Summit, Hindustan Lancer, Sueast Lioncel y Mitsubishi Mirage en varios países en diferentes momentos, y se ha vendido como Mitsubishi Galant. Fortis en Japón desde 2007. También se ha vendido como Mitsubishi Lancer Fortis en Taiwán con un lavado de cara diferente al Galant Fortis. En Japón, se vendió en una cadena minorista específica llamada Car Plaza.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xedizP9_kPvVvc7LmItdagHaEK%26pid%3DApi&f=1&ipt=f5ea386ab7b9df7f938e935385d7579a92a81ab0b65ff9a4584c787f27aae7d1&ipo=images",
}, {
    "id": 16,
    "titulo": "RS Turbo",
    "precio": 12400,
    "stock": 9,
    "marca": "Renault",
    "category": "rally" ,
    "description" : "El Renault 5 Turbo o R5 Turbo es un automóvil deportivo con puerta trasera lanzado por el fabricante francés Renault en el Salón del Automóvil de Bruselas en enero de 1980. El automóvil fue diseñado principalmente para rally, pero también se vendió en una versión de calle.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zp4luPt2PKPZZHBZFEoqUAHaE7%26pid%3DApi&f=1&ipt=c9e53b79d9e5641ed27411a74fd340aec75c5fb8e4c48497f2255efa75ebfc1b&ipo=images",
}, {
    "id": 17,
    "titulo": "Stratos",
    "precio": 13600,
    "stock": 0,
    "marca": "Lancia",
    "category": "rally" ,
    "description" : "El Lancia Stratos HF, más conocido como Lancia Stratos, es un automóvil deportivo con motor central trasero diseñado para carreras de rally, fabricado por el fabricante de automóviles italiano Lancia. El HF significa Alta Fidelidad. Fue un auto de rally muy exitoso, ganando el Campeonato Mundial de Rally en 1974, 1975 y 1976; y coche de carreras ganador de la Targa Florio de 1974, cinco veces el Tour de France Automobile y tres ediciones delTour automovilístico de Italia.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qtp3i9aeKQnXi4vDNbDbygHaE6%26pid%3DApi&f=1&ipt=ec82447cbb1bedb41753584c6a5aa42ad07a3b02e8bb9a1dd9b23aae3c16da41&ipo=images",
}, {
    "id": 18,
    "titulo": "Polo R WRC",
    "precio": 20140,
    "stock": 9,
    "marca": "Volkswagen",
    "category": "rally" ,
    "description" : "El Volkswagen Polo R WRC es un World Rally Car construido y operado por Volkswagen Motorsport y basado en el Volkswagen Polo para su uso en el Campeonato Mundial de Rally. El coche, que hizo su debut al comienzo de la temporada 2013, está fabricado según la segunda generación de las normas de World Rally Car que se introdujeron en 2011, que se basan en las normas Super 2000 existentes, pero propulsado por un motor turboalimentado de 1,6 litros. motor en lugar del motor de 2 litros de aspiración natural que se encuentra en los autos Super 2000.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qKsz3fWf8BSd6Rr27cHd1AHaEK%26pid%3DApi&f=1&ipt=67a029c63be82a6e8d9c7ef56b17ec4a78dd8cc9e83377e04422d91f52f9544a&ipo=images",
}, {
    "id": 19 ,
    "titulo": "Quattro S1",
    "precio": 28800,
    "stock": 10,
    "marca": "Audi",
    "category": "rally" ,
    "description" : "El Audi Quattro es un automóvil de carretera y rally, producido por el fabricante de automóviles alemán Audi, parte del Grupo Volkswagen. Se mostró por primera vez en el Salón del Automóvil de Ginebra de 1980 el 3 de marzo. La producción continuó hasta 1991.",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SxWWzdZfEo2_o-CfC7XcPQHaEo%26pid%3DApi&f=1&ipt=dfc9afde46b594d86f96bb507fb934420240877f88a55e555b7014ac20a3b33c&ipo=images",
}, {
    "id": 20,
    "titulo": "Clio V6",
    "precio": 12410,
    "stock": 5,
    "marca": "Renault",
    "category": "deportivo" ,
    "description" : "El Renault Clio V6 Renault Sport es un compacto deportivo con diseño de tracción trasera y motor central trasero basado en el Renault Clio lanzado en 2001. Diseñado por el fabricante de automóviles francés Renault, los modelos de la Fase 1 fueron construidos por Tom Walkinshaw Racing (TWR) en Uddevalla, Suecia y Phase 2 fueron diseñados y construidos a mano por Renault Sport en Dieppe, Francia. Ambas variantes fueron desarrolladas por TWR. El concepto de cuerpo ancho y motor central del Clio V6 recordaba mucho al Renault 5 Turbo de la década de 1980. Ambos modelos de carretera fueron de producción de bajo volumen, lo que los convirtió en autos muy raros. Junto con el automóvil de carretera, se produjo una versión solo para circuito, conocida como Clio V6 Trophy. Este era un automóvil de competencia completa, con caja de cambios Sadev secuencial, jaula antivuelco completa, ruedas de magnesio y una potencia del motor aumentada a 285 PS",
    "imgSrc": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.n6zJbiAr-HrGMVBrdHUOtgHaE2%26pid%3DApi&f=1&ipt=4017b67004aa9da72f8c0f8ec27122f487f527126750b178ae52b061d5031555&ipo=images",
} ]

export function getAutos(){
    return new Promise((resolve) => {
        setTimeout(() =>  resolve(data), 500);
    });
}

export function getAutosDetail(idParams){
    return new Promise((resolve) => {
        let autoReq = data.find( (item) => {
            return item.id === Number(idParams) ;
        })
        setTimeout(() =>  resolve(autoReq) , 500);
    });
}

export function getAutosCategoryId(idCategoryParams){
    return new Promise((resolve) => {
        let filterAutos = data.filter(item => item.category === idCategoryParams )
        setTimeout(() => resolve(filterAutos), 500);
    })
}