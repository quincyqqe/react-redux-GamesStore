import GameItem from '../../components/GameItem/GameItem'
import './HomePage.scss'

const GAMES = [
	{
		image:
			'https://gpstatic.com/acache/42/66/1/uk/t620x300-9db06a53d8c94e1b18167908a402ff3b.jpg',
		title: 'Elden Ring',
		genres: ['Action RPG', 'Темное фэнтези', 'Экшн'],
		price: 1799,
		video: 'https://www.youtube.com/embed/AKXiKBnzpBQ',
		id: 1,
		description:
			'Elden Ring - новая эпическая Action RPG, созданная при участии Хидэтаки Миядзаки и Джорджа Р. Р. Мартина. Погрузитесь в мир, где темные фэнтезийные элементы сочетаются с богатой историей. Исследуйте обширные локации, сражайтесь с могущественными врагами и раскройте тайны Elden Ring!',
	},
	{
		image:
			'https://images.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610.jpg',
		title: "Baldur's Gate 3",
		genres: ['Ролевая игра', 'Пошаговая стратегия', 'Фэнтези'],
		price: 899,
		video: 'https://www.youtube.com/embed/1T22wNvoNiU',
		id: 2,
		description:
			"Baldur's Gate 3 – это захватывающая ролевая игра, разработанная Larian Studios. Исследуйте опасные земли Забытых Пантеонов, вступайте в борьбу с темными силами, и решайте сложные загадки. Вас ждет захватывающее приключение в мире магии и интриг. Готовьтесь к эпическому путешествию в Baldur's Gate 3!",
	},
	{
		image:
			'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1700587390',
		title: 'Dark Souls 3',
		genres: ['Action RPG', 'Темное фэнтези', 'Экшн'],
		price: 990,
		video: 'https://www.youtube.com/embed/0J4u1FD87FM',
		id: 3,
		description:
			'Dark Souls 3 - это третья часть знаменитой серии Action RPG от FromSoftware. Погрузитесь в темный и мрачный мир, наполненный опасностями и загадками. Сразитесь с сильными противниками, исследуйте запутанные локации и пройдите через испытания. Готовьтесь к невероятным боям и уникальному опыту в Dark Souls 3!',
	},
	{
		image:
			'https://preview.redd.it/leak-payday-3-artwork-on-epic-games-store-database-v0-61tlqdiypu4b1.png?width=640&crop=smart&auto=webp&s=98787300ff091cd35e0b7aa8b9c262c2829604fb',
		title: 'Payday 3',
		genres: ['Шутер от первого лица', 'Кооператив'],
		price: 1066,
		video: 'https://www.youtube.com/embed/dc5gw3ctb0o',
		id: 4,
		description:
			'Payday 3 - это новая часть популярной криминальной кооперативной серии. Соберите команду преступников, готовых к ограблению банков, и вступите в захватывающие миссии. Планируйте свои действия, используйте различное снаряжение и разберитесь с противниками. Готовьтесь к адреналину и богатству в Payday 3!',
	},
	{
		image:
			'https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg',
		title: 'Diablo 4',
		genres: ['Action RPG', 'Темное фэнтези', 'Экшн'],
		price: 2449,
		video: 'https://www.youtube.com/embed/Ro26B394ZBM',
		id: 5,
		description:
			'Diablo 4 - новая глава в легендарной серии Action RPG от Blizzard Entertainment. Погрузитесь в темные и опасные земли Санктуария, где вам предстоит столкнуться с силами зла. Исследуйте мрачные подземелья, разгадывайте загадки и сражайтесь с ужасными противниками. Готовьтесь к эпическому приключению в Diablo 4!',
	},
	{
		image:
			'https://techraptor.net/sites/default/files/styles/image_header/public/2023-02/Metro%202033%20Redux%20Key%20Art.jpg?itok=9WZr2kOZ',
		title: 'Metro 2033',
		genres: ['Шутер от первого лица', 'Хоррор', 'Выживание'],
		price: 533,
		video: 'https://www.youtube.com/embed/QThDHIu8sZE',
		id: 6,
		description:
			'Metro 2033 - захватывающий шутер от первого лица, основанный на романе Дмитрия Глуховского. Исследуйте мрачные туннели московского метрополитена, наполненные опасностями и мутантами. Ваше выживание зависит от принятия сложных решений и умения справляться с ограниченными ресурсами. Погрузитесь в атмосферу апокалиптического мира в Metro 2033!',
	},
]

const HomePage = () => {
	return (
		<div className='home-page'>
			{GAMES.map(game => (
				<GameItem game={game} key={game.id} />
			))}
		</div>
	)
}

export default HomePage
