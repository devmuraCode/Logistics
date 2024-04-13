import React from "react";

const Suppliers: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center py-6">Поиск поставщиков в Китае: Цены, сроки, гарантии</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-sm uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-yellow">
              Сложность запроса
            </th>
            <th scope="col" className="px-6 py-3">
              Средне сложный
            </th>
            <th scope="col" className="px-6 py-3">
              Сложный
            </th>
            <th scope="col" className="px-6 py-3">
              Очень сложный
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-sm border-b border-gray dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-6 font-normal text-gray-900 whitespace-nowrap dark:text-white">
              Стоимость услуги
            </td>
            <td className="px-6 py-4">150 дол США</td>
            <td className="px-6 py-4">200 дол США</td>
            <td className="px-6 py-4">300 дол США</td>
          </tr>
          <tr className="bg-white border-b border-gray dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Срок поиска рабочих дней
            </td>
            <td className="px-6 py-4">1-3 дня</td>
            <td className="px-6 py-4">2-5 дней</td>
            <td className="px-6 py-4">до 10 дней</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Отчет
            </td>
            <td colSpan={3} className="px-6 py-4">
              Отчет с описанием о товаре или производстве, Дополнительная
              полезная информация. Название компании или производителя,
              Контактные данные, Уставные документы.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
