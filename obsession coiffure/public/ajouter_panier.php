<?php

 include_once "config/con_dbb.php";
 
 if(!isset($_SESSION)){
 
    session_start();
 }
 
  if(isset($_GET['id'])){
    $id = $_GET['id'] ;
    
    $produit = mysqli_query($con ,"SELECT * FROM produits WHERE id = $id") ;
    if(empty(mysqli_fetch_assoc($produit))){
    
        die("Ce produit n'existe pas");
    }
    
    if(isset($_SESSION['panier'][$id])){
        $_SESSION['panier'][$id]++;
    }else {

        $_SESSION['panier'][$id] = 1 ;
    }

   header("Location:clickandcollect.php");
   exit();


  }
?>