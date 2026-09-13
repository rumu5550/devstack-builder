import React from 'react';

const YourStack = ({ selectedStack, onRemoveFromStack, onClearStack }) => {
  const count = selectedStack.length;

  return (
    <aside className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sticky top-24">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-sm text-gray-400 mt-1">
          {count > 0
            ? `${count} Technology Selected`
            : 'No technologies selected yet.'}
        </p>
      </div>

      {count === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 px-4 text-center">
          <p className="text-sm font-medium text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center p-1.5 shrink-0 border border-gray-100">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-gray-400 capitalize truncate">
                      {tech.category}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveFromStack(tech.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label={`Remove ${tech.name}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClearStack}
            className="w-full mt-4 py-2.5 px-4 text-sm font-semibold text-red-500 hover:text-red-600 bg-white hover:bg-red-50/50 border border-red-200 hover:border-red-300 rounded-xl transition-all cursor-pointer text-center"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;
