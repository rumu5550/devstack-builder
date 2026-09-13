import React from 'react';

const TechCard = ({ tech, isSelected, onAddToStack }) => {
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular':
        return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'versatile':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'fast':
        return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'full-stack':
      case 'containers':
        return 'bg-cyan-50 text-cyan-600 border-cyan-100';
      case 'standard':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'top sql':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'cache':
        return 'bg-red-50 text-red-600 border-red-100';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'essential':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'robust':
        return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'modern':
        return 'bg-teal-50 text-teal-600 border-teal-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100/80 group-hover:scale-105 transition-transform duration-200">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </div>
          {tech.badge && (
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getBadgeStyle(
                tech.badge
              )}`}
            >
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
          {tech.name}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5 font-normal">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-3 border-t border-gray-50">
          <span className="px-2.5 py-1 bg-gray-100 text-gray-700 font-medium rounded-md">
            {tech.category}
          </span>
          <span className="font-medium text-gray-600">{tech.difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400 text-sm">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAddToStack(tech)}
          disabled={isSelected}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
            isSelected
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-brand-gradient text-white hover:opacity-95 active:scale-[0.99] cursor-pointer shadow-sm hover:shadow'
          }`}
        >
          {isSelected ? (
            <>
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
