import Array "mo:core/Array";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type InquiryId = Nat;

  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compareByTime(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  var currentId = 0;
  let inquiries = Map.empty<InquiryId, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("Name, email, and message cannot be empty");
    };

    let inquiry : Inquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    inquiries.add(currentId, inquiry);
    currentId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort(Inquiry.compareByTime);
  };
};
