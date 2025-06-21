
public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();

        System.out.println(logger1.hashCode());
       

        Logger logger2 = Logger.getInstance();
        System.out.println(logger2.hashCode());

        
      
    }
}

// Both will show same hashcode, that is both is same instance hence following singleton pattern design
