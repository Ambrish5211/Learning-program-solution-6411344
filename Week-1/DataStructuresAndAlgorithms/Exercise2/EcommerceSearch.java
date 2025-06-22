import java.util.*;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "ProductID: " + productId + ", ProductName: " + productName + ", Category: " + category;
    }
}

public class EcommerceSearch {

    public static Product linearSearchById(Product[] products, int id) {
        for (Product product : products) {
            if (product.productId == id) return product;
        }
        return null;
    }

    public static Product linearSearchByName(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) return product;
        }
        return null;
    }

    public static Product linearSearchByCategory(Product[] products, String category) {
        for (Product product : products) {
            if (product.category.equalsIgnoreCase(category)) return product;
        }
        return null;
    }

    
    public static Product binarySearchById(Product[] products, int id) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == id) {
                return products[mid];
            } else if (products[mid].productId < id) {
                left = mid + 1;
            } else {
               right = mid - 1; 
            } 
        }
        return null;
    }

    public static Product binarySearchByName(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            } 
        }
        return null;
    }

   

    public static void sortById(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
    }

    public static void sortByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shampoo", "Personal Care"),
            new Product(103, "Book", "Education"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Notebook", "Stationery")
        };

        while (true) {
            System.out.println("1. Search by Product ID");
            System.out.println("2. Search by Product Name");
            System.out.println("3. Search by Category (Linear Only)");
            System.out.println("4. Exit");
            System.out.print("Choose option (1-4): ");
            int choice = sc.nextInt();
            sc.nextLine();
            System.out.println();

            if (choice == 4) {
                System.out.println("Exiting.");
                break;
            }

            int method;
            if(choice == 3) {
                method = 1;
            } else {
                System.out.println("Select Search Method:");
                System.out.println("1. Linear Search");
                System.out.println("2. Binary Search");
                method = sc.nextInt();
                sc.nextLine();
                System.out.println();
            }
            

            Product result = null;

            switch (choice) {
                case 1: 
                    System.out.print("Enter Product ID: ");
                    int id = sc.nextInt();
                    sc.nextLine();
                    if (method == 1) {
                        result = linearSearchById(products, id);
                    } else {
                        sortById(products);
                        result = binarySearchById(products, id);
                    }
                    break;
                case 2: 
                    System.out.print("Enter Product Name: ");
                    String name = sc.nextLine();
                    if (method == 1) {
                        result = linearSearchByName(products, name);
                    } else {
                        sortByName(products);
                        result = binarySearchByName(products, name);
                    }
                    break;
                case 3: 
                    System.out.print("Enter Category: ");
                    String category = sc.nextLine();
                    result = linearSearchByCategory(products, category);
                    break;
                default:
                    System.out.println("Invalid option.");
            }

            if (result != null) {
                System.out.println();
                System.out.println("ProductFound: " + result);
                System.out.println();
            } else {
                System.out.println();
                System.out.println("Product not found.");
                System.out.println();
            }
        }

    }
}
