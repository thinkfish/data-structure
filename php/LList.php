<?php

include('./Node.php');

class LList
{

    function __construct($head)
    {
        $this->head = $head;
    }

    // insert
    public function insert($newElement, $item)
    {
        $newNode = new Node($newElement);
        $currentNode = $this->find($item);
        $newNode.next = $currentNode.next;
        $currentNode . next = $newNode;
    }

    // find
    public function find($item)
    {
        $currentNode = $this->head;
        if ($currentNode . element == $item) {
            return $currentNode;
        } else {
            while ($currentNode . element != $item) {
                $currentNode = $currentNode . next;
            }
        }
        return $currentNode;
    }

    // findPre
    public function findPre($item)
    {
        $currentNode = $this->head;
        while ($currentNode . next != null && $currentNode . next . element != $item) {
            $currentNode = $currentNode . next;
        }
        return $currentNode;
    }

    // remove
    public function remove($item)
    {
        $preNode = $this->findPre($item);
        $currentNode = $this->find($item);
        $preNode . next = $currentNode . next;
    }

    // display
    public function display()
    {
        $currentNode = $this->head;
        while ($currentNode . next != null) {
            echo json_encode($currentNode);
            $currentNode = $currentNode . next;
        }
    }
}
