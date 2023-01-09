package FareCalculator;

import static org.junit.Assert.*;

import javax.swing.JButton;

import org.junit.Test;

public class FareCalculatorTest {

	@Test
	public void test() {
		FareCalculator calculator = new FareCalculator();
		calculator.departCombo.addItem("Punjab");
		calculator.departCombo.addItem("Punjab");
		calculator.departCombo.addItem("Sindh");
		calculator.departCombo.addItem("KPK");
		calculator.departCombo.addItem("Balochistan");
		
		calculator.computeFare = new JButton("Compute Fare Test");
		
	}

}