import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What can I track with Miney?',
      answer:
        'Miney is built for everyday expenses, income, budgets, assets, and account balances.',
    },
    {
      question: 'Can I create monthly budgets?',
      answer:
        'Yes. You can set category budgets and see how much is used or remaining during the month.',
    },
    {
      question: 'Does Miney support recurring records?',
      answer:
        'Miney supports recurring income and expenses so regular money movement is easier to keep current.',
    },
  ],
  [
    {
      question: 'Can I track assets and accounts?',
      answer:
        'Yes. You can follow cash, cards, savings, and other balances from one simple overview.',
    },
    {
      question: 'Where is Miney based?',
      answer:
        'Miney is designed for people who want a clean, international personal finance experience.',
    },
    {
      question: 'Do I need finance experience?',
      answer:
        'No. Miney is intentionally simple, with clear summaries and practical controls for everyday use.',
    },
  ],
  [
    {
      question: 'How did you get this on the App Store?',
      answer:
        'Miney is being built as a focused mobile app. App Store and Play Store links can be connected when your release is ready.',
    },
    {
      question: 'Can I export my data?',
      answer:
        'Export options are part of the paid plans, making it easier to review or back up your records.',
    },
    {
      question: 'Can I replace the app screenshots?',
      answer:
        'Yes. The landing page keeps the template screenshot structure, so product screenshots can be swapped later.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
