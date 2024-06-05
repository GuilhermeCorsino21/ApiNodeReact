import prismaClient from "../prisma";

class ListCustomerServices {
    async execute() {
        const costumers = await prismaClient.customer.findMany()

        return costumers;
    }
}

export { ListCustomerServices }