<template>
  <section id="offer" class="mx-auto max-w-7xl scroll-mt-24 px-6 py-16" aria-labelledby="offer-title">
    <h2 id="offer-title" class="text-3xl font-bold text-slate-900 md:text-4xl">Oferta</h2>
    <p class="mt-4 max-w-2xl text-lg text-slate-700">
      Dwa auta, asfalt albo szuter. Zadzwoń po szczegóły.
    </p>

    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <article class="rounded-2xl bg-gray-950 p-6 text-white md:p-8">
        <h3 class="text-2xl font-bold">Peugeot 208 Rally2</h3>
        <p class="mt-4 text-lg text-gray-300">
          Rajdówka w pełnej specyfikacji, z serwisem i zespołem RallyZone. Ty skupiasz się na prowadzeniu.
        </p>
        <p class="mt-6">
          <CallLink location="offer-208" class="font-semibold text-[#ec1c24] underline decoration-2 underline-offset-4 hover:text-[#ff4d53]">
            Zadzwoń po szczegóły
          </CallLink>
        </p>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h3 class="text-2xl font-bold text-slate-900">Opel Corsa</h3>
        <p class="mt-4 text-lg text-slate-700">
          Dla młodszych entuzjastów motorsportu: niewielkie auto i duże emocje na dobry początek rajdowej przygody.
        </p>
        <p class="mt-6">
          <CallLink location="offer-corsa" class="font-semibold text-[#ec1c24] underline decoration-2 underline-offset-4 hover:text-[#c4161d]">
            Zadzwoń po szczegóły
          </CallLink>
        </p>
      </article>
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl bg-slate-100 p-6">
        <h3 class="text-xl font-semibold text-slate-900">Asfalt</h3>
        <p class="mt-3 text-slate-700">
          Wybierasz nawierzchnię. Na asfalcie przygotowujemy auto pod twardy odcinek.
        </p>
      </div>
      <div class="rounded-2xl bg-slate-100 p-6">
        <h3 class="text-xl font-semibold text-slate-900">Szuter</h3>
        <p class="mt-3 text-slate-700">
          Ta sama obsługa na szutrze: dostarczamy auto, dbamy o jego gotowość, Ty jedziesz.
        </p>
      </div>
    </div>
  </section>
</template>
