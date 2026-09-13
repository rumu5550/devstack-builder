import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Where can we deploy the site?',
      answer:
        'You can deploy the site anywhere you like, such as Netlify, Vercel, Cloudflare Pages, or any other hosting platform. There is no fixed platform.',
      defaultChecked: true,
    },
    {
      question: 'Do we have to use TypeScript?',
      answer:
        'No. You can use TypeScript or JavaScript. If you want to build the whole project in plain JavaScript, that is completely fine.',
      defaultChecked: false,
    },
    {
      question: 'Can we change the title, logo, and colors?',
      answer:
        "Yes. The project title, logo, and color scheme are all yours to change — just keep them relevant to the project. Don't use random or unrelated colors and don't put an unrelated title/logo.",
      defaultChecked: false,
    },
    {
      question: 'Where do we get the technology logos and icons?',
      answer: (
        <span>
          You can use image URLs from Google or from anywhere you like. A good
          source with clean, ready-to-use tech logos is{' '}
          <a
            href="https://techicons.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
            https://techicons.dev/
          </a>{' '}
          — copy the icon URL from there and put it in your JSON data.
        </span>
      ),
      defaultChecked: false,
    },
  ];

  return (
    <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Common <span className="text-brand-gradient">FAQ</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 font-normal">
          Frequently asked questions about Dev Stack.
        </p>
      </div>

      <div className="join join-vertical w-full space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border border-gray-200 bg-white rounded-2xl transition-all shadow-xs hover:border-gray-300"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={faq.defaultChecked}
            />
            <div className="collapse-title text-base sm:text-lg font-bold text-gray-900 pr-12">
              {faq.question}
            </div>
            <div className="collapse-content text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

