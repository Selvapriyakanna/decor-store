import { Request, Response } from 'express';
import { exportTransactionsToExcel } from '../services/excelExport';
import { Transaction } from '../models/transaction'; // Assuming a Transaction model exists

export const getTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await Transaction.find(); // Fetch transactions from the database
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};

export const createTransaction = async (req: Request, res: Response) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save(); // Save the transaction to the database
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
};

export const exportTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await Transaction.find(); // Fetch transactions for export
        const filePath = await exportTransactionsToExcel(transactions); // Export to Excel
        res.download(filePath); // Send the file to the client
    } catch (error) {
        res.status(500).json({ message: 'Error exporting transactions', error });
    }
};