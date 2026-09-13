import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TechCard from './TechCard';
import YourStack from './YourStack';

const ExploreTechnologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load technologies');
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  const handleRemoveFromStack = (techId) => {
    const removedItem = selectedStack.find((item) => item.id === techId);
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack!`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    }
  };

  const handleClearStack = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('All technologies removed from your stack!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <ToastContainer position="bottom-right" />

      <div className="mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 font-normal">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-gray-100 border-t-pink-600 animate-spin shadow-sm"></div>
          <p className="text-base font-medium text-gray-600 animate-pulse">
            Fetching technologies...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isSelected = selectedStack.some((item) => item.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isSelected={isSelected}
                    onAddToStack={handleAddToStack}
                  />
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3">
            <YourStack
              selectedStack={selectedStack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearStack={handleClearStack}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreTechnologies;

