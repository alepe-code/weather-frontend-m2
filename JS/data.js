// data.js - Datos de las ciudades y su clima
const citiesData = [
    {
        id: 1,
        name: 'Santiago',
        country: 'Chile',
        temp: 22,
        condition: 'Soleado',
        humidity: 45,
        wind: 12,
        icon: 'sun',
        forecast: [
            { day: 'Lunes', temp: 23, condition: 'Soleado', icon: 'sun' },
            { day: 'Martes', temp: 21, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Miércoles', temp: 19, condition: 'Nublado', icon: 'cloud' },
            { day: 'Jueves', temp: 20, condition: 'Soleado', icon: 'sun' },
            { day: 'Viernes', temp: 22, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 24, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 23, condition: 'Parcialmente nublado', icon: 'cloud-sun' }
        ]
    },
    {
        id: 2,
        name: 'Buenos Aires',
        country: 'Argentina',
        temp: 18,
        condition: 'Nublado',
        humidity: 65,
        wind: 15,
        icon: 'cloud',
        forecast: [
            { day: 'Lunes', temp: 17, condition: 'Nublado', icon: 'cloud' },
            { day: 'Martes', temp: 16, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 15, condition: 'Lluvia', icon: 'rain' },
            { day: 'Jueves', temp: 18, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Viernes', temp: 20, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 21, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 19, condition: 'Parcialmente nublado', icon: 'cloud-sun' }
        ]
    },
    {
        id: 3,
        name: 'Lima',
        country: 'Perú',
        temp: 20,
        condition: 'Nublado',
        humidity: 80,
        wind: 10,
        icon: 'cloud',
        forecast: [
            { day: 'Lunes', temp: 20, condition: 'Nublado', icon: 'cloud' },
            { day: 'Martes', temp: 19, condition: 'Nublado', icon: 'cloud' },
            { day: 'Miércoles', temp: 21, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Jueves', temp: 20, condition: 'Nublado', icon: 'cloud' },
            { day: 'Viernes', temp: 20, condition: 'Nublado', icon: 'cloud' },
            { day: 'Sábado', temp: 21, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Domingo', temp: 22, condition: 'Soleado', icon: 'sun' }
        ]
    },
    {
        id: 4,
        name: 'Bogotá',
        country: 'Colombia',
        temp: 14,
        condition: 'Lluvioso',
        humidity: 85,
        wind: 8,
        icon: 'rain',
        forecast: [
            { day: 'Lunes', temp: 15, condition: 'Lluvia', icon: 'rain' },
            { day: 'Martes', temp: 14, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 13, condition: 'Lluvia', icon: 'rain' },
            { day: 'Jueves', temp: 14, condition: 'Nublado', icon: 'cloud' },
            { day: 'Viernes', temp: 15, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Sábado', temp: 16, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Domingo', temp: 15, condition: 'Nublado', icon: 'cloud' }
        ]
    },
    {
        id: 5,
        name: 'Ciudad de México',
        country: 'México',
        temp: 21,
        condition: 'Soleado',
        humidity: 40,
        wind: 14,
        icon: 'sun',
        forecast: [
            { day: 'Lunes', temp: 22, condition: 'Soleado', icon: 'sun' },
            { day: 'Martes', temp: 23, condition: 'Soleado', icon: 'sun' },
            { day: 'Miércoles', temp: 21, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Jueves', temp: 20, condition: 'Nublado', icon: 'cloud' },
            { day: 'Viernes', temp: 22, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 24, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 23, condition: 'Soleado', icon: 'sun' }
        ]
    },
    {
        id: 6,
        name: 'Montevideo',
        country: 'Uruguay',
        temp: 17,
        condition: 'Parcialmente nublado',
        humidity: 70,
        wind: 18,
        icon: 'cloud-sun',
        forecast: [
            { day: 'Lunes', temp: 16, condition: 'Nublado', icon: 'cloud' },
            { day: 'Martes', temp: 15, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 17, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Jueves', temp: 19, condition: 'Soleado', icon: 'sun' },
            { day: 'Viernes', temp: 20, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 18, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Domingo', temp: 17, condition: 'Nublado', icon: 'cloud' }
        ]
    },
    {
        id: 7,
        name: 'Quito',
        country: 'Ecuador',
        temp: 16,
        condition: 'Nublado',
        humidity: 75,
        wind: 9,
        icon: 'cloud',
        forecast: [
            { day: 'Lunes', temp: 16, condition: 'Nublado', icon: 'cloud' },
            { day: 'Martes', temp: 15, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 16, condition: 'Nublado', icon: 'cloud' },
            { day: 'Jueves', temp: 17, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Viernes', temp: 18, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 17, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Domingo', temp: 16, condition: 'Nublado', icon: 'cloud' }
        ]
    },
    {
        id: 8,
        name: 'La Paz',
        country: 'Bolivia',
        temp: 10,
        condition: 'Soleado',
        humidity: 35,
        wind: 16,
        icon: 'sun',
        forecast: [
            { day: 'Lunes', temp: 11, condition: 'Soleado', icon: 'sun' },
            { day: 'Martes', temp: 12, condition: 'Soleado', icon: 'sun' },
            { day: 'Miércoles', temp: 10, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Jueves', temp: 9, condition: 'Nublado', icon: 'cloud' },
            { day: 'Viernes', temp: 11, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 13, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 12, condition: 'Soleado', icon: 'sun' }
        ]
    },
    {
        id: 9,
        name: 'Caracas',
        country: 'Venezuela',
        temp: 26,
        condition: 'Parcialmente nublado',
        humidity: 60,
        wind: 11,
        icon: 'cloud-sun',
        forecast: [
            { day: 'Lunes', temp: 27, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Martes', temp: 26, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 25, condition: 'Lluvia', icon: 'rain' },
            { day: 'Jueves', temp: 26, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Viernes', temp: 27, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 28, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 27, condition: 'Parcialmente nublado', icon: 'cloud-sun' }
        ]
    },
    {
        id: 10,
        name: 'San José',
        country: 'Costa Rica',
        temp: 24,
        condition: 'Lluvioso',
        humidity: 90,
        wind: 7,
        icon: 'rain',
        forecast: [
            { day: 'Lunes', temp: 24, condition: 'Lluvia', icon: 'rain' },
            { day: 'Martes', temp: 23, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 24, condition: 'Lluvia', icon: 'rain' },
            { day: 'Jueves', temp: 25, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Viernes', temp: 26, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Sábado', temp: 25, condition: 'Lluvia', icon: 'rain' },
            { day: 'Domingo', temp: 24, condition: 'Lluvia', icon: 'rain' }
        ]
    },
    {
        id: 11,
        name: 'Asunción',
        country: 'Paraguay',
        temp: 28,
        condition: 'Soleado',
        humidity: 55,
        wind: 13,
        icon: 'sun',
        forecast: [
            { day: 'Lunes', temp: 29, condition: 'Soleado', icon: 'sun' },
            { day: 'Martes', temp: 30, condition: 'Soleado', icon: 'sun' },
            { day: 'Miércoles', temp: 28, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Jueves', temp: 27, condition: 'Nublado', icon: 'cloud' },
            { day: 'Viernes', temp: 29, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 31, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 30, condition: 'Soleado', icon: 'sun' }
        ]
    },
    {
        id: 12,
        name: 'Panamá',
        country: 'Panamá',
        temp: 30,
        condition: 'Parcialmente nublado',
        humidity: 75,
        wind: 10,
        icon: 'cloud-sun',
        forecast: [
            { day: 'Lunes', temp: 31, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Martes', temp: 30, condition: 'Lluvia', icon: 'rain' },
            { day: 'Miércoles', temp: 29, condition: 'Lluvia', icon: 'rain' },
            { day: 'Jueves', temp: 30, condition: 'Parcialmente nublado', icon: 'cloud-sun' },
            { day: 'Viernes', temp: 31, condition: 'Soleado', icon: 'sun' },
            { day: 'Sábado', temp: 32, condition: 'Soleado', icon: 'sun' },
            { day: 'Domingo', temp: 31, condition: 'Parcialmente nublado', icon: 'cloud-sun' }
        ]
    }
];