import React from 'react'
import './HomePage.css'
import { GameItem } from '../../components/GameItem'

const GAMES = [
	{
		image: '/game-covers/forza_5.jpeg',
		title: 'Forza Horizon 5',
		genres: ['Race', 'Simulator', 'Open world'],
		price: 43,
		video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
		id: 1,
		description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
	},
	{
		image: '/game-covers/battlefield_2042.jpg',
		title: 'Battlefield 2042',
		genres: ['Action', 'Shooter', 'War'],
		video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
		price: 33,
		id: 2,
		description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
	},
	{
		image: '/game-covers/life_is_strange_true_colors.jpeg',
		title: 'Life is Strange True Colors',
		genres: ['Deep plot', 'Protagonist'],
		video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
		price: 21,
		id: 3,
		description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
	},
	{
		image: '/game-covers/gta_v.jpeg',
		title: 'Grand Theft Auto V',
		genres: ['Open world', 'Action'],
		video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
		price: 89,
		id: 4,
		description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
	},
	{
		image: '/game-covers/rainbow_siege.jpeg',
		title: 'Tom Clancy\'s Rainbow Six® Siege',
		video: 'https://www.youtube.com/embed/6wlvYh0h63k',
		genres: ['Тактика', 'Shooter'],
		price: 92,
		id: 5,
		description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
	},
	{
		image: '/game-covers/assassins_creed_valhalla.png',
		title: 'Assassin’s Creed Valhalla',
		genres: ['Паркур', 'RPG', 'Open world'],
		video: 'https://www.youtube.com/embed/ssrNcwxALS4',
		price: 63,
		id: 6,
		description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
	},
	{
		image: '/game-covers/spiderman.jpeg',
		title: 'Spider-man',
		genres: ['Паркур', 'Open world'],
		video: 'https://www.youtube.com/watch?v=zvSATuZXl2c',
		price: 93,
		id: 7,
		description: 'Spider-Man — это action-adventure от третьего лица с открытым миром, события которого разворачиваются в Нью-Йорке. Игрокам предстоит использовать умения Человека-паука, такие как полёты на паутине и прилипание к стенам. В игре также есть нововведения, которые ещё не появлялись за все игры о Человеке-пауке.'
	},
	{
		image: '/game-covers/last.jpg',
		title: 'Last of Us',
		genres: ['Action', 'Open world'],
		video: 'https://www.youtube.com/watch?v=eBJTYa-Z7FU',
		price: 70,
		id: 8,
		description: 'The Last of Us - приключенческий экшен, рассказывающий историю Джоэла и Элли, стремящихся выжить в разрушенном, пораженном страшной эпидемией мире. Паре героев предстоит пересечь разрушенные США, чтобы добраться до безопасной зоны и спасти свои жизни.'
	},
	{
		image: '/game-covers/fifa22.jpg',
		title: 'FIFA 2022',
		genres: ['Sport', 'Simulator'],
		video: 'https://www.youtube.com/watch?v=SYsi5QuOJNE',
		price: 100,
		id: 9,
		description: 'FIFA 22 — 29-ая по счёту компьютерная игра из серии FIFA в жанре футбольного симулятора, разработанная компаниями EA Vancouver под издательством Electronic Arts. На ПК, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S и Nintendo Switch игра уже вышла в октябре 2021 года.'
	},
]

const HomePage = () => {
	return (
		<div className='home-page'>
			{GAMES.map(game => <GameItem key={game.id} game={game} />)}
		</div>
	)
}

export { HomePage }
