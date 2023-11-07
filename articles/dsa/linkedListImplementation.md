---
title: "Linked List Implementation (Singly linked List)"
createdAt: "2023-01-02"
tags: 
 - Linked List
 - Singly Linked List
subtags:
 - Easy
---
# Linked List Implementation
Linked List is a linear data structure that can be implemented using 
1. Classes
2. Stuctures

In this tutorial, I have implementing a singly linked list in both the ways, so that you can understand both the implementation and be comfortable with both stuctures and classes while woking with any linear or hirerchical data structure.

## Class based Implementation
```
#include<bits/stdc++.h>
using namespace std;

class Node{
public:
    int data;
    Node* next;

    // constructor
    Node(int data){
        this->data = data;
        this->next = nullptr;
    }

    // destructor
    ~Node(){
        delete next;
    }
};

class SinglyLinkedList{
private:
    Node* head = nullptr;
    Node* tail = nullptr;

public: 
    // constructor
    SinglyLinkedList(int data){
        head = new Node(data);
        tail = head;
    }

    // destructor
    ~SinglyLinkedList(){
        delete head;
        delete tail;
    }

    // inserting a node at head
    void insertAtHead(int d){
        
        // creating new node
        Node* new_node = new Node(d);
        new_node->next = head;
        head = new_node;
    }

    // inserting a node at tail
    void insertAtTail(int d){
        
        // creating a new node
        Node* new_node = new Node(d);
        tail->next = new_node;
        tail = new_node;
    }

    // inserting a node in any position in the list
    void insertAtPosition(int pos, int d){
        
        // if pos is 1 ie; inserting at head
        if(pos == 1){
            insertAtHead(d);
            return;
        }

        // traversing the list till n-1th pos and then inserting the node
        Node* curr = head;
        int cnt = 1;

        while(cnt < pos-1){
            curr = curr->next;
            cnt++;
        }

        // creating a new node
        Node* new_node = new Node(d);

        new_node->next = curr->next;
        curr->next = new_node;
    }

    // printing the list
    void printList(){
       
        if(head == nullptr) {
            cout << "List is empty "<< endl;
            return ;
        }

        Node* curr = head;

        while(curr  != nullptr ) {
            cout << curr-> data << " ";
            curr = curr-> next;
        }
        cout << endl;
    }

    // deleting a node by its position in the list
    void deleteNodeByPosition(int pos){

        // if the position is 1 ie; deleting the head node
        if(pos == 1){
            Node* curr = head;
            head = head->next;

            // making the head->next point to nullptr
            curr->next = nullptr;

            // deleting curr node and freeing memory
            delete curr;
        }else{

            // initializing curr and prev pointer
            Node* curr = head;
            Node* prev = nullptr;

            // traversing till n-1th position and keeping the track of prev pointer
            int cnt = 1;
            while(cnt < pos){
                prev = curr;
                curr = curr->next;
                cnt++;
            }

            // if current node is the tail node
            if(curr == tail)
                tail = prev;

            prev->next = curr->next;

            // making curr->next point to nullptr
            curr->next = nullptr;

            // deleting curr node and freeing memory
            delete curr;
        }
    }

    // deleting a node by its value
    void deleteNodeByValue(int d){

        // if head.data matches d
        if(head->data == d){
            Node* curr = head;
            head = head->next;

            // making head->next point to nullptr
            curr->next = nullptr;

            // deleting curr node and freeing memory
            delete curr;
        }else{
             // initializing curr and prev pointer
            Node* curr = head;
            Node* prev = nullptr;

            // traversing the list matching the value d and keeping the track of prev pointer
            while(curr->data != d && curr->next != nullptr){
                prev = curr;
                curr = curr->next;
            }

            // if current node is the tail node
            if(curr == tail)
                tail = prev;

            prev->next = curr->next;

            // making curr->next point to nullptr
            curr->next = nullptr;

            // deleting curr node and freeing memory
            delete curr;
        }
    }
};

// driver function
int main(){

    // creating a new list
    SinglyLinkedList list(20);
  
    list.insertAtHead(10);
    list.printList();

    list.insertAtTail(40);
    list.insertAtTail(50);
    list.printList();

    list.insertAtPosition(3, 30);
    list.printList();

    list.deleteNodeByPosition(2);
    list.printList();

    list.deleteNodeByValue(10);
    list.printList();
}
```

## Struct based Implementation

```
#include<bits/stdc++.h>
using namespace std;

struct Node{
    int data;
    struct Node* next = nullptr;

    Node(int data){
        this->data = data;
        next = nullptr;
    }
};


// inserting a node at head
void insertAtHead(Node* &head, int d){
    
    // creating new node
    Node* new_node = new Node(d);
    new_node->next = head;
    head = new_node;
}

// inserting a node at tail
void insertAtTail(Node* &tail, int d){
    
    // creating a new node
    Node* new_node = new Node(d);
    tail->next = new_node;
    tail = new_node;
}

// inserting a node in any position in the list
void insertAtPosition(Node* &head, int pos, int d){
    
    // if pos is 1 ie; inserting at head
    if(pos == 1){
        insertAtHead(head, d);
        return;
    }

    // traversing the list till n-1th pos and then inserting the node
    Node* curr = head;
    int cnt = 1;

    while(cnt < pos-1){
        curr = curr->next;
        cnt++;
    }

    // creating a new node
    Node* new_node = new Node(d);

    new_node->next = curr->next;
    curr->next = new_node;
}

// printing the list
void printList(Node* &head){
   
    if(head == NULL) {
        cout << "List is empty "<< endl;
        return ;
    }

    Node* curr = head;

    while(curr  != NULL ) {
        cout << curr-> data << " ";
        curr = curr-> next;
    }
    cout << endl;
}

// deleting a node by its position in the list
void deleteNodeByPosition(Node* &head, Node* &tail, int pos){

    // if the position is 1 ie; deleting the head node
    if(pos == 1){
        Node* curr = head;
        head = head->next;

        // making the head->next point to null
        curr->next = NULL;

        // deleting curr node and freeing memory
        delete curr;
    }else{

        // initializing curr and prev pointer
        Node* curr = head;
        Node* prev = NULL;

        // traversing till n-1th position and keeping the track of prev pointer
        int cnt = 1;
        while(cnt < pos){
            prev = curr;
            curr = curr->next;
            cnt++;
        }

        // if current node is the tail node
        if(curr == tail)
            tail = prev;

        prev->next = curr->next;

        // making curr->next point to null
        curr->next = NULL;

        // deleting curr node and freeing memory
        delete curr;
    }
}

// deleting a node by its value
void deleteNodeByValue(Node* &head, Node* &tail, int d){

    // if head.data matches d
    if(head->data == d){
        Node* curr = head;
        head = head->next;

        // making head->next point to null
        curr->next = NULL;

        // deleting curr node and freeing memory
        delete curr;
    }else{
         // initializing curr and prev pointer
        Node* curr = head;
        Node* prev = NULL;

        // traversing the list matching the value d and keeping the track of prev pointer
        while(curr->data != d && curr->next != NULL){
            prev = curr;
            curr = curr->next;
        }

        // if current node is the tail node
        if(curr == tail)
            tail = prev;

        prev->next = curr->next;

        // making curr->next point to null
        curr->next = NULL;

        // deleting curr node and freeing memory
        delete curr;
    }
}

// driver function
int main(){

    // creating first node as head
    Node* head = new Node(20);
    Node* tail = head;

    insertAtHead(head, 10);
    printList(head);

    insertAtTail(tail, 40);
    insertAtTail(tail, 50);
    printList(head);

    insertAtPosition(head, 3, 30);
    printList(head);

    deleteNodeByPosition(head, tail, 2);
    printList(head);

    deleteNodeByValue(head, tail, 10);
    printList(head);

    // deleting pointers and freeing memory
    delete head;
    delete tail;
}
```
