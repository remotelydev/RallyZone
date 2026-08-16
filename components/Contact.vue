<template>
  <section id="contact" class="bg-gray-900 text-gray-100 py-16 px-4 flex justify-center" aria-labelledby="contact-title">
    <div
      class="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl bg-gray-800 text-gray-200 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
    >
      <!-- Map -->
      <div class="h-96 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.1158546678384!2d18.509945376333043!3d52.022987072908265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b18a5c3596c61%3A0xc162632d2c14b968!2sZdrojki%20Prawe%2095%2C%2062-700%20Turek!5e0!3m2!1sen!2spl!4v1760106749921!5m2!1sen!2spl"
          class="w-full h-full border-0 filter grayscale"
          title="Lokalizacja RallyZone w Zdrojkach Prawych"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>

      <!-- Contact Details -->
      <div class="p-10 flex flex-col justify-center gap-4 bg-gray-800">
        <h2 id="contact-title" class="text-3xl font-semibold text-white mb-2">Kontakt i wynajem rajdówki</h2>
        <p class="text-gray-300">Zapytaj o dostępność Peugeota 208 Rally2 lub Opla Corsy i ustal szczegóły startu.</p>
        <p>
          <span class="font-semibold text-gray-100">Adres: </span>
          Zdrojki Prawe 95, 62-700 Turek
        </p>
        <p>
          <span class="font-semibold text-gray-100">E-mail: </span>
          <a
            href="mailto:rallyzone.pl@gmail.com"
            class="text-gray-300 hover:text-gray-100 transition"
          >rallyzone.pl@gmail.com</a>
        </p>
        <p>
          <span class="font-semibold text-gray-100">Telefon: </span>
          <a
            href="tel:+48501101994"
            class="text-gray-300 hover:text-gray-100 transition"
          >+48 501 101 994</a>
        </p>
      </div>
    </div>
  </section>
</template>
