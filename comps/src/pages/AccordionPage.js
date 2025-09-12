import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      id: 2,
      label: 'Section 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      id: 3,
      label: 'Section 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
