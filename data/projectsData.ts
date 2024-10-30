interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Eager Beaver: A mistaken identity story',
    description: `Eager Beaver is a story that blends mistaken identity and age regression. Cooper Young, a height challenged American boy, recently made the move from America to the small town of Welton, Canada. He joins the Canadian Scouts and after some misunderstanding finds himself in the youngest group, the Beavers. He learns how to have fun, work hard and help his friends.`,
    imgSrc: '/static/images/eager-beaver.png',
    href: 'https://www.amazon.com/dp/B0CRG3782L',
  },
]

export default projectsData
