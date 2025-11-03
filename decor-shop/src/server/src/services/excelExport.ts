import { Workbook } from 'exceljs';

export const exportTransactionsToExcel = async (transactions: any[]) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Transactions');

    worksheet.columns = [
        { header: 'Transaction ID', key: 'id', width: 30 },
        { header: 'Product Name', key: 'productName', width: 30 },
        { header: 'Quantity', key: 'quantity', width: 15 },
        { header: 'Price', key: 'price', width: 15 },
        { header: 'Total', key: 'total', width: 15 },
        { header: 'Date', key: 'date', width: 30 },
    ];

    transactions.forEach(transaction => {
        worksheet.addRow({
            id: transaction.id,
            productName: transaction.productName,
            quantity: transaction.quantity,
            price: transaction.price,
            total: transaction.total,
            date: transaction.date,
        });
    });

    const filePath = `transactions_${new Date().toISOString().split('T')[0]}.xlsx`;
    await workbook.xlsx.writeFile(filePath);
    return filePath;
};