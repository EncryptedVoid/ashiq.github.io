// components/sections/Contact/index.jsx
import React from 'react';
import ContactSources from './ContactSources';

const MobileContact = () => {
  return (
    <section className="
      w-full
      py-20
      px-4
      sm:px-6
      lg:px-8
      bg-gray-900
    ">
      <div className="
        max-w-4xl
        mx-auto
        w-full
      ">
        <ContactSources />
      </div>
    </section>
  );
};

export default MobileContact;