import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { FilterSet, Filter } from "../lib/filters";
import { ActiveFilters } from "../pages/map";

const Filters = ({
  filters,
  activeFilters,
  toggleFilter,
}: {
  filters: Array<FilterSet>;
  activeFilters: ActiveFilters;
  toggleFilter: (filter: Filter) => void;
}) => {
  return (
    <form className="px-2">
      {filters.map((section, sectionIdx) => (
        <Disclosure
          as="div"
          key={sectionIdx}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.filters.map((filter, filterIdx) => (
                    <div key={filterIdx} className="flex items-center">
                      <input
                        id={`filter-${sectionIdx}-${filterIdx}`}
                        name={`${sectionIdx}[]`}
                        defaultValue={filter.id}
                        type="checkbox"
                        onClick={() => toggleFilter(filter)}
                        defaultChecked={
                          activeFilters.filter((f) => f.id === filter.id)
                            .length > 0
                        }
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${sectionIdx}-${filterIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {filter.title}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
};

export default Filters;
