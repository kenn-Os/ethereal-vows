import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const photos = [
    '/public/assets/images/amanda-mark.jpg',
    '/public/assets/images/emily-james.jpg',
    '/public/assets/images/lisa-david.jpg',
    '/public/assets/images/sarah-michael.jpg',
    '/public/assets/images/lena-mike.jpg',
    '/public/assets/images/nora-daniel.jpg',
    '/public/assets/images/bride.jpg',
    '/public/assets/images/lira-brandon.jpg',
    '/public/assets/images/andy-tam.jpg',
    '/public/assets/images/sergio-souza.jpg',
    '/public/assets/images/emma-bauso.jpg',
    '/public/assets/images/pink-bride.jpg',
    '/public/assets/images/mira.jpg',
    '/public/assets/images/emma-jake.jpg',
    '/public/assets/images/dani-femi.jpg',
    '/public/assets/images/fiona-fred.jpg',
    '/public/assets/images/jeff-kweba.jpg',
    '/public/assets/images/femi-dami.jpg',
    '/public/assets/images/rex-suzie.jpg',
    '/public/assets/images/ruth-james.jpg',
    '/public/assets/images/couple flo.jpg',
    '/public/assets/images/dennis-irorere.jpg',
    '/public/assets/images/dom-sally.jpg',
    '/public/assets/images/bride1.jpg',
  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };


  return (
    <div className="p-4 bg-[#034160]">
      <h2 className="text-3xl font-bold mb-4 text-center photo">Photo Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="cursor-pointer overflow-hidden"
            onClick={() => openPhoto(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-auto object-cover rounded"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            className="fixed mt-5 top-0 left-0 w-full h-full bg-[#034160] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={photos[selectedPhotoIndex]}
              alt={`Photo ${selectedPhotoIndex + 1}`}
              className="max-h-screen max-w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl focus:outline-none"
              onClick={closePhoto}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl focus:outline-none"
              onClick={() =>
                setSelectedPhotoIndex(
                  (selectedPhotoIndex + 1) % photos.length
                )
              }
            >
              &gt;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;