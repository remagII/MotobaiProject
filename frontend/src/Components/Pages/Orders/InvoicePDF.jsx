import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 5,
  },
  logItem: {
    marginBottom: 5,
  },
});

// InvoicePDF Component
const InvoicePDF = ({
  orderDetails,
  logsData,
  orderInitialBalance,
  orderDeductions,
  orderPayment,
  orderTrackingStatus,
  orderPaymentRefNum,
  dateCreated,
}) => (
  <Document>
    <Page style={styles.page}>
      {/* Order Details Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Order Details</Text>
        <Text>Order Type: {orderDetails.order_type || "N/A"}</Text>
        <Text>
          Account Name:{" "}
          {orderDetails.account_name || orderDetails.customer_name || "N/A"}
        </Text>
        <Text>Phone Number: {orderDetails.phone_number || "N/A"}</Text>
        <Text>
          Employee: {orderDetails.employee_first_name}{" "}
          {orderDetails.employee_last_name}
        </Text>
      </View>

      {/* Address Section */}
      {orderDetails.order_type === "Delivery" && (
        <View style={styles.section}>
          <Text style={styles.heading}>Address</Text>
          <Text>City: {orderDetails.city || "N/A"}</Text>
          <Text>Barangay: {orderDetails.barangay || "N/A"}</Text>
          <Text>Street: {orderDetails.street || "N/A"}</Text>
        </View>
      )}

      {/* Order Summary Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Order Summary</Text>
        <Text>Sales Reference #: {orderDetails.reference_number || "N/A"}</Text>
        <Text>Initial Balance: {orderInitialBalance || "N/A"}</Text>
        <Text>Deductions: {orderDeductions || "N/A"}</Text>
        <Text>Total Balance: {orderPayment || "N/A"}</Text>
        {orderTrackingStatus === "completed" && (
          <Text>Payment Reference #: {orderPaymentRefNum || "N/A"}</Text>
        )}
      </View>

      {/* Status History Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Status History</Text>
        <Text>Date Created: {dateCreated}</Text>
        <Text>Date Validated: {dateCreated}</Text>
        <Text>Date Shipped: {dateCreated}</Text>
        <Text>Date Received: {dateCreated}</Text>
        <Text>Date Completed: {dateCreated}</Text>
      </View>

      {/* Logs Section */}
      {logsData && logsData.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Logs</Text>
          {logsData.map((log, index) => (
            <Text key={index} style={styles.logItem}>
              {log.id}: {log.description || "No description available"}
            </Text>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default InvoicePDF;
