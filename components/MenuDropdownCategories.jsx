import { CaretDown } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useData } from '../hooks/useData';

function MenuDropdownCategories({ closeModal }) {
  const { categories, setFilterAPi } = useData();
  const router = useRouter();
  const changeCategory = (value) => {
    setFilterAPi({ type: 'category', value });
    router.push('/search');
    if (closeModal) closeModal();
  };

  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 hover:text-light-secondary dark:hover:text-light-secondary text-light-text dark:text-dark-text" title="Menu dropdown de categorias">
        Categorias
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col w-44 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto h-56 scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin">
          {categories && categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className="flex items-center py-2 pl-3 pr-4 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 snap-start text-light-text dark:text-dark-text"
              onClick={() => changeCategory(category.name)}
              title={`Categoria ${category.name}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default MenuDropdownCategories;
