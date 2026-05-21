interface Props {
  selected: string
  onSelect: (category: string) => void
}

const categories = [
  'Todos',
  'Laptops',
  'Accesorios',
  'Audio',
  'Monitores'
]

export default function CategoryFilter({
  selected,
  onSelect
}: Props) {
  return (
    <div className='flex gap-3 flex-wrap mb-8'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-lg border transition ${
            selected === category
              ? 'bg-black text-white'
              : 'bg-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}