const pool = require('../ConexionMySql/db');
const jsonData = [
        {
          "id": "1",
          "title": "Falcon Heavy",
          "tipoNave":"SpaceX",
          "descriptionProduct": "Vehículo de lanzamiento espacial superpesado reutilizable, diseñado y fabricado por SpaceX.",
          "descriptionInfo":"El Falcon Heavy (FH) («Halcón Pesado»), anteriormente conocido como Falcon 9 Heavy, es un vehículo de lanzamiento espacial superpesado reutilizable, diseñado y fabricado por SpaceX. El Falcon Heavy es una variante del lanzador Falcon 9 y consiste en un núcleo de cohete Falcon 9 reforzado, con otros dos núcleos de Falcon 9 como cohetes aceleradores adicionales. Esto aumentará la carga útil de la órbita terrestre baja (OTB) a 64 toneladas, comparado con 22,8 toneladas de un Falcon 9. Falcon Heavy fue diseñado desde el principio para llevar a los seres humanos al espacio, y permitiría misiones con tripulación a la Luna o Marte.",
          "caracteristics":"Funcionalidad: Vuelo espacial orbital. Vehículo de lanzamiento de elevación superpesada\nAltura: 70 m\nDiámetro: 3,66 m x2 booster\nN° Propulsores: 2\nMotores: 9 Merlin 1D\nCantidad de motores: 27\nVelocidad máxima: 39.600 km/h\nPresupuesto: 90 millones USD (2018)",
          "imageProduct": "https://assets.newatlas.com/dims4/default/a37fdc5/2147483647/strip/true/crop/864x576+80+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fflacon-heavy.jpg",
          "imageInfo":"https://danielmarin.naukas.com/files/2024/06/GQ9uFIcbwAA2Lt8-scaled.jpeg",
          "price": "2000"
        },
        {
          "id": "2",
          "title": "Falcon 9",
          "tipoNave":"SpaceX",
          "descriptionProduct": "Vehículo de lanzamiento parcialmente reutilizable de dos etapas diseñado y fabricado por SpaceX.",
          "descriptionInfo":"El Falcon 9 (español: 'halcón', a nueve motores) es un vehículo de lanzamiento parcialmente reutilizable de dos etapas diseñado y fabricado por SpaceX. Usa como propelentes queroseno para cohetes (RP-1) densificado y oxígeno líquido (LOX). Suversión actual, el Falcon 9 Block 5, tiene una carga útil aproximada de 22.800 kg a órbita baja terrestre y de aproximadamente 8.300 kg a órbita de transferencia geosíncrona. La primera etapa es capaz de aterrizar para ser reutilizada en nuevas misiones, ya sea volviendo a tierra o sobre una nave dron. Mediante este cohete, SpaceX ofrece servicios como lanzamiento de satélites, y transporte de carga a la Estación Espacial Internacional (ISS). En el año 2020 transportó por primera vez astronautas a la ISS junto con su nueva nave Crew Dragon, y en el año mismo empezó el servicio regular.",
          "caracteristics":"Funcionalidad: Sistema de lanzamiento orbital reutilizable\nAltura: 70 m\nCoste por lanzamiento: Desechable: $62M Reutilizable: $56M (planeado $43M) (2024\nCarga útil a OTB. Desechable: 22.800 kg\nCarga útil a OTG. Desechable: 8.300 kg Reutilizable: 5.500 kg\nMotores primera etapa: 9 Merlin 1D+\nMotores segunda etapa: 1 Merlin 1D+ Vacuum\nÚltimo vuelo: 23 de abril del 2024",
          "imageProduct": "https://www.fromspacewithlove.com/wp-content/uploads/2018/05/falcon-9.png",
          "imageInfo":"https://hips.hearstapps.com/hmg-prod/images/in-this-spacex-handout-image-a-falcon-9-rocket-carrying-the-news-photo-1591219555.jpg",
          "price": "2500"
        },
        {
          "id": "3",
          "title": "Starship",
          "tipoNave":"SpaceX",
          "descriptionProduct": "Sistema de lanzamiento y nave espacial totalmente reutilizable desarrollado por SpaceX como proyecto de vuelo espacial pivado.",
          "descriptionInfo":"Starship (español: Astronave), también llamada Starship/Super Heavy, es un sistema de lanzamiento y nave espacial totalmente reutilizable desarrollado por SpaceX como proyecto de vuelo espacial privado. Fue diseñado para permitir el transporte de carga y pasajeros hacia la órbita terrestre, la Luna, Marte y más allá. La nave (nombrada como Starship) se usará en lanzamientos orbitales en conjunto con una primera etapa, el propulsor Super Heavy, por lo que servirá como un vehículo de lanzamiento de dos etapas a órbita. A la combinación de nave espacial (2ª etapa) y propulsor (1ª etapa) también se le llama Starship La gran carga útil esperada de hasta 150.000 kg lo convertiría en un vehículo de lanzamiento superpesado. Starship es actualmente el cohete más poderoso en la historia, y el primer cohete orbital 100% reutilizable.",
          "caracteristics":"Funcionalidad: Colonización de Marte, Transporte terrestre-lunar, Transporte multiplanetario, Transporte intercontinental, Sistema de lanzamiento reutilizable, Nave espacial reutilizable, Turismo espacial\nAltura: 121 m\nCoste por lanzamiento: US$ 2M (Estimado) (2024)\nCapacidades: 100.000 - 150.000 kg a LEO\nVuelo inaugural: 20 de abril del 2023\nMasa: (5.000.000 kg) (con carga útil máxima)\nÚltimo vuelo: 6 de junio del 2024",
          "imageProduct": "https://cdn.arstechnica.net/wp-content/uploads/2024/10/starshipflight5_pre1.jpeg",
          "imageInfo":"https://actualidadaeroespacial.com/wp-content/uploads/2023/04/Starship-180423.jpg",
          "price": "3000"
        },
        {
          "id": "4",
          "title": "Dragon",
          "tipoNave":"SpaceX",
          "descriptionProduct": "Dragon es una familia de naves espaciales desarrolladas y producidas por la empresa estadounidense de transporte espacial privado SpaceX.",
          "descriptionInfo":"La SpaceX Dragon, también conocida como Dragon 1 o Cargo Dragon, fue una clase de nave espacial reutilizable de carga desarrollada por SpaceX, una empresa de transporte espacial estadounidense. La Dragon era lanzada a bordo del cohete Falcon 9 de la compañía para reabastecer a la Estación Espacial Internacional (ISS). Posteriormente fue sustituida por la SpaceX Dragon 2. Durante su vuelo inaugural en diciembre de 2010, la Dragon se convirtió en la primera nave comercial en ser recuperada con éxito. El 25 de mayo de 2012, se convirtió en la primera nave comercial en atracar en la ISS.",
          "caracteristics":"Funcionalidad: Colonización de Marte, Transporte terrestre-lunar, Transporte multiplanetario, Transporte intercontinental, Sistema de lanzamiento reutilizable, Nave espacial reutilizable, Turismo espacial\nAltura: 121 m\nCoste por lanzamiento: US$ 2M (Estimado) (2024)\nCapacidades: 100.000 - 150.000 kg a LEO\nVuelo inaugural: 20 de abril del 2023\nMasa: (5.000.000 kg) (con carga útil máxima)\nÚltimo vuelo: 6 de junio del 2024",
          "imageProduct": "https://media.wired.com/photos/5c071c65785d6a2ce543b373/master/pass/spacexdragon.jpg",
          "imageInfo":"https://images.squarespace-cdn.com/content/v1/5705dc13d210b8bf599dd4f1/1460604727933-8FY3RZ9JPBBWE2CC5R30/SpaceX_CRS-4_Dragon.jpg",
          "price": "3000"
        },
        {
          "id": "5",
          "title": "Dragon 2",
          "tipoNave":"SpaceX",
          "descriptionProduct": "El SpaceX Dragon 2 es una clase de nave espacial parcialmente reutilizable desarrollada y fabricada por la compañía estadounidense SpaceX para sustituir a la Dragon 1, una nave espacial de carga también reutilizable.",
          "descriptionInfo":"El SpaceX Dragon 2 es una clase de nave espacial parcialmente reutilizable desarrollada y fabricada por la compañía estadounidense SpaceX para sustituir a la Dragon 1, una nave espacial de carga también reutilizable. Cuenta con dos variantes: Crew Dragon, una cápsula espacial capaz de transportar hasta siete astronautas, y Cargo Dragon, un reemplazo actualizado de la Dragon original. La nave espacial queda planeada para ser lanzada sobre un cohete Falcon 9 Block 5 y regresa a la Tierra través de un amerizaje oceánico. A diferencia de su predecesora, puede acoplarse de forma autónoma a la Estación Espacial Internacional (ISS) en lugar de ser atracada. Crew Dragon está equipada con un sistema de escape de lanzamiento integrado (LES) que consta de ocho motores SuperDraco, capaces de acelerar el vehículo lejos del cohete en caso de emergencia.",
          "caracteristics":"Funcionalidad: Colonización de Marte, Transporte terrestre-lunar, Transporte multiplanetario, Transporte intercontinental, Sistema de lanzamiento reutilizable, Nave espacial reutilizable, Turismo espacial\nAltura: 121 m\nCoste por lanzamiento: US$ 2M (Estimado) (2024)\nCapacidades: 100.000 - 150.000 kg a LEO\nVuelo inaugural: 20 de abril del 2023\nMasa: (5.000.000 kg) (con carga útil máxima)\nÚltimo vuelo: 6 de junio del 2024",
          "imageProduct": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Crew_Dragon_at_the_ISS_for_Demo_Mission_1_%28cropped%29.jpg/1200px-Crew_Dragon_at_the_ISS_for_Demo_Mission_1_%28cropped%29.jpg",
          "imageInfo":"https://images.squarespace-cdn.com/content/v1/5705dc13d210b8bf599dd4f1/1533164004620-VIEM2LKH610A0LBL3LSP/42840169205_8b486529b0_o.jpg?format=1500w",
          "price": "3000"
        },
        {
          "id": "6",
          "title": "Saturno V",
          "tipoNave":"NASA",
          "descriptionProduct": "El Saturno V fue un cohete desechable de múltiples fases y de combustible líquido usado en los programas Apolo y Skylab de la NASA.",
          "descriptionInfo":"El Saturno V (Saturn V) fue un cohete desechable de múltiples fases y de combustible líquido usado en los programas Apolo y Skylab de la NASA. Su diseño estuvo a cargo del ingeniero aeroespacial alemán Wernher von Braun en el Marshall Space Flight Center (Centro de vuelo espacial Marshall) y sus principales constructores fueron Boeing,North American Aviation, Douglas Aircraft Company e IBM. Fue el más grande de la familia de cohetes Saturno. En sus vuelos, el Saturno V pasaba por tres fases: S-IC, la primera fase, S-II, la segunda, y S-IVB como última fase. En las tres se utilizaba oxígeno líquido (LOX) como oxidante. En la primera fase se usaba RP-1 (petróleo refinado) como combustible, mientras que las otras dos fases usaban hidrógeno líquido (LH2). En una misión, por término medio, el cohete funcionaba durante unos 20 minutos.",
          "caracteristics":"Funcionalidades: Vehículo de lanzamiento del Programa Apolo. Vehículo de lanzamiento del Skylab\nAltura: 110,6 m\nCoste por lanzamiento: $185 millones en dólares de 1969-1971 dollars ($1.23 mil millones en 2019). (2024)\nCoste del proyecto: $6.417 mil millones en dólares de 1964-1973 (~$49.9 mil millones en 2020\nCapacidades: Carga útil a LEO (90 km, 30° inclinación): 140 000 kg\nCarga útil a ITL: 48 600 kg\nVuelo inaugural: 9 de noviembre de 1967\nÚltimo vuelo: 14 de mayo de 1973\nMotores de primera, segunda y tercera etapa: 5 F-1, 5 J-2, 1 J-2",
          "imageProduct": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_l4tBJ1_nLLTOW3Ohxtb58DQ3f1Ap17zaBg&s",
          "imageInfo":"https://images-assets.nasa.gov/image/KSC-71PC-0571/KSC-71PC-0571~large.jpg?w=1920&h=1536&fit=clip&crop=faces%2Cfocalpoint",
          "price": "1500"
        },
        {
          "id": "7",
          "title": "SLS",
          "tipoNave":"NASA",
          "descriptionProduct": "El sistema de lanzamiento espacial, es un vehículo de lanzamiento no recuperable superpesado estadounidense que está siendo desarrolldo por la NASA desde 2011.",
          "descriptionInfo":"El sistema de lanzamiento espacial (en inglés: 'Space Launch System' o 'SLS'), es un vehículo de lanzamiento no recuperable superpesado estadounidense que está siendo desarrollado por la NASA desde 2011. El primer lanzamiento, denominado Artemis 1, tuvo lugar el 16 de noviembre de 2022 a las 06:47 UTC desde el Centro Espacial Kennedy. El SLS sustituye a los vehículos de lanzamiento Ares I y Ares V, que fueron cancelados junto con el resto del programa Constelación, un programa anterior destinado a volver a la Luna. El SLS está destinado a convertirse en el sucesor del retirado transbordador espacial y en el principal vehículo de lanzamiento de los planes de exploración del espacio profundo de la NASA hasta finales de la década de 2030. En el marco del programa Artemis se prevén vuelos lunares con tripulación, que conducirán a una posible misión humana a Marte. El SLS se está desarrollando en tres grandes fases con capacidades crecientes: Block 1, Block 1B y Block 2. A partir de noviembre de 2022, los vehículos de lanzamiento SLS Block 1 van a lanzar las tres primeras misiones Artemis13 y está previsto que cinco vuelos posteriores del SLS utilicen el Block 1B, tras lo cual todos los vuelos utilizarán el Block 2",
          "caracteristics":"Funcionadilades: Lanzamiento espacial\nAltura: 98 m\nMasa: 2.610 toneladas\nCapacidades: Carga útil a OTB 70.000 a 130.000 kg\nVuelo inaugural: 16 de noviembre de 2022",
          "imageProduct": "https://www.nasa.gov/wp-content/uploads/2022/11/artemisi111122.jpg",
          "imageInfo":"https://media.es.wired.com/photos/6374fbf158733849e5ff4fa0/4:3/w_2400,h_1800,c_limit/Artemis-1-SLS-Launch-Science.jpg",
          "price": "3000"
        },
        {
          "id": "8",
          "title": "Delta IV Heavy",
          "tipoNave":"NASA",
          "descriptionProduct": "El Delta IV Heavy, fue un vehículo de lanzamiento de carga pesada desechable, el tipo más grande de la familia Delta IV.",
          "descriptionInfo":"El Delta IV Heavy (Delta 9250H)(«Delta IV Pesado»), fue un vehículo de lanzamiento de carga pesada desechable, el tipo más grande de la familia Delta IV. Fue fabricado por United Launch Alliance y se lanzó por primera vez en 2004. El Delta IV Heavy utilizó dos Common Booster Core (CBC) adicionales como reforzadores de cohetes líquidos en lugar de los motores de cohetes sólidos GEM-60 utilizados por las versiones Delta IV Medium +. En el momento del despegue, los tres núcleos operan a pleno empuje, y 44 segundos más tarde el núcleo central se reduce hasta un 55% para conservar el combustible hasta la separación del refuerzo. Los propulsores se queman a los 242 segundos después del lanzamiento y se separan cuando el acelerador de núcleo vuelve a acelerar por completo. El núcleo se quema 86 segundos después, y la segunda etapa completa el ascenso a la órbita.",
          "caracteristics":"Funcionadilades: Vehículo de lanzamiento pesado orbital\nCoste por lanzamiento: 350 Millones de USD (2018)\nAltura: 72 m\nMasa: 733.000 kilogramos\nCapacidades: Carga útil a OTB: 28.790 kilos. Carga útil a OTG: 14.220 kilos\nVuelo inaugural: 24 de diciembre de 2004\nVelocidad máxima: 39.600 km/h\nÚltimo vuelo: 9 de abril de 2024",
          "imageProduct": "https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2024/03/Imagen-Archivo-Delta-IV-Heavy.jpg",
          "imageInfo":"https://live.staticflickr.com/784/39092546570_2b1ec09400_b.jpg",
          "price": "3000"
        },
        {
          "id": "9",
          "title": "Orion",
          "tipoNave":"NASA",
          "descriptionProduct": "Orión es una nave espacial tripulada parcialmente reutilizable utilizada en el programa Artemis de la NASA. La nave espacial consta de una cápsula espacial Crew Module diseñada por Lockheed Martin y el Módulo de Servicio Orión fabricado por Airbus Defence and Space.",
          "descriptionInfo":"El cohete del Sistema de Lanzamiento Espacial impulsará a la nave Orion más allá de la Luna y para luego continuar hacia el planeta rojo, permitiendo que la humanidad conquiste nuevos mundos algún día. Para proteger a los astronautas en estas misiones de larga duración y devolverlos a la Tierra de forma segura, los ingenieros de la nave Orion han dotado a la nave espacial con tecnología innovadora, sistemas avanzados y protección térmica de última generación. El equipo que trabaja en Orion se ha basado en la experiencia de los últimos cincuenta años en exploración del espacio con vuelos tripulados, operaciones de lanzamiento, misiones robóticas pioneras, construcción en el espacio y gestión de misiones. ",
          "caracteristics":"Funcionadilades: Vehículo de lanzamiento pesado orbital\nCoste por lanzamiento: 350 Millones de USD (2018)\nAltura: 72 m\nMasa: 733.000 kilogramos\nCapacidades: Carga útil a OTB: 28.790 kilos. Carga útil a OTG: 14.220 kilos\nVuelo inaugural: 24 de diciembre de 2004\nVelocidad máxima: 39.600 km/h\nÚltimo vuelo: 9 de abril de 2024",
          "imageProduct": "https://danielmarin.naukas.com/files/2016/07/nasa_orion_spacecraft.jpg",
          "imageInfo":"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/11/orion_esm2/15702073-2-eng-GB/Orion_ESM_pillars.jpg",
          "price": "3000"
        },
        {
          "id": "10",
          "title": "Transbordador STS",
          "tipoNave":"NASA",
          "descriptionProduct": "El Transbordador espacial STS era una nave espacial de la NASA parcialmente reutilizable para órbita baja terrestre. Su nombre se deriva de un plan de 1969 para un sistema de naves espaciales reutilizables de las cuales solo el Transbordador fue financiado.",
          "descriptionInfo":"El Transbordador espacial STS (siglas del inglés Space Transport System, Sistema de Transporte Espacial) era una nave espacial de la NASA parcialmente reutilizable para órbita baja terrestre. Su nombre se deriva de un plan de 1969 para un sistema de naves espaciales reutilizables de las cuales solo el Transbordador fue financiado.1​ El 10 de marzo de 1981 se realizó el primero de cuatro vuelos orbitales de prueba, abriendo paso a vuelos operativos en 1982. Los Transbordadores espaciales fueron utilizados en 135 misiones entre 1981 y 2011, lanzados desde el Centro Espacial Kennedy (KSC) en Florida, Estados Unidos Misiones operacionales lanzaron varios satélites, sondas interplanetarias y el Telescopio Espacial Hubble (HST); realizaron experimentos científicos en órbita; y participaron en la construcción y el servicio de la Estación Espacial Internacional (EEI). El tiempo total de misión de la flota de Transbordadores fue 722 días, 19 horas, 21 minutos y 23 segundos",
          "caracteristics":"Funcionadilades: Vehículo de lanzamiento pesado orbital\nCoste por lanzamiento: 350 Millones de USD (2018)\nAltura: 72 m\nMasa: 733.000 kilogramos\nCapacidades: Carga útil a OTB: 28.790 kilos. Carga útil a OTG: 14.220 kilos\nVuelo inaugural: 24 de diciembre de 2004\nVelocidad máxima: 39.600 km/h\nÚltimo vuelo: 9 de abril de 2024",
          "imageProduct": "https://img.freepik.com/fotos-premium/transbordador-espacial-columbia-despeja-torre-segundos-despues-lanzamiento-mision-sts-enero_662214-308276.jpg",
          "imageInfo":"https://www.delphosmagazine.com/wp-content/uploads/2021/04/01_Columbia_sts1_NASA_DelphosMagazine.jpg",
          "price": "3000"
        }
      ]

async function insertData() {
    try {
        for (const item of jsonData) {
            const query = `INSERT INTO rockets (id, title, tipoNave, descriptionProduct, descriptionInfo, caracteristics, imageProduct, imageInfo, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [item.id, item.title, item.tipoNave, item.descriptionProduct, item.descriptionInfo, item.caracteristics, item.imageProduct, item.imageInfo, item.price];
            const [results] = await pool.query(query, values);
            console.log("Registro insertado, ID:", results.insertId);
        }
        pool.end(); // Cierra el pool de conexiones
    } catch (err) {
        console.error("Error al insertar datos:", err);
    }
}

insertData();
