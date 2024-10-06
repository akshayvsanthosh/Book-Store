import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publish-book',
  templateUrl: './publish-book.component.html',
  styleUrls: ['./publish-book.component.css']
})
export class PublishBookComponent {
  image: any = "../assets/addImage.png"
  allowedImageTypesForImg = ['image/png', 'image/jpg', 'image/jpeg'];
  allowedImageTypesForFile = ['application/pdf'];

  addForm = this.fb.group({
    bookImg: ["", [Validators.required]],
    bookName: ["", [Validators.pattern('[a-zA-Z ]*'), Validators.required]],
    bookCategory: ["", [Validators.required]],
    bookFile: ["", [Validators.required]]
  })


  constructor(private api: ApiService, private toaster: ToastrService, private fb: FormBuilder) { }

  onImgChange(event: any) {
    const image = event.target.files[0]
    if (image && this.allowedImageTypesForImg.includes(image.type)) {
      let fr = new FileReader()
      fr.readAsDataURL(image)
      fr.onload = (e: any) => {
        this.image = e.target.result
        this.addForm.patchValue({
          bookImg: image
        })
        this.addForm.get('bookImg')?.markAsTouched()
      }
    } else {
      this.toaster.warning("Invalid image type! Please upload a PNG, JPG, or JPEG.");
      this.addForm.patchValue({
        bookImg: ""
      })
      this.image = "../assets/addImage.png"
      this.addForm.get('bookImg')?.markAsTouched()
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0]
    if (file && this.allowedImageTypesForFile.includes(file.type)) {
      this.addForm.patchValue({
        bookFile: file
      })
      this.addForm.get('bookFile')?.markAsTouched()
    } else {
      this.toaster.warning("Invalid file type! Please upload only Pdf");
      this.addForm.patchValue({
        bookFile: ""
      })
      this.addForm.get('bookFile')?.markAsTouched()
    }

  }

  addBook() {
    if (sessionStorage.getItem("token")) {
      if (this.addForm.valid) {
        const reqBody = new FormData();
  
        const bookImg = this.addForm.get('bookImg')?.value;
        const bookName = this.addForm.get('bookName')?.value
        const bookCategory = this.addForm.get('bookCategory')?.value
        const bookFile = this.addForm.get('bookFile')?.value
  
        if (bookImg && bookName && bookCategory && bookFile) {
          reqBody.append('bookImg', bookImg); 
          reqBody.append('bookName',bookName)
          reqBody.append('bookCategory',bookCategory)
          reqBody.append('bookFile',bookFile)
        }
        
        this.api.addBookAPI(reqBody).subscribe({
          next:(result:any)=>{
            console.log(result);
            this.toaster.success('Book added successfully')
            this.addForm.reset()
          },
          error:(reason:any)=>{
            console.log(reason);
            this.toaster.warning(reason.error)
          }
        })
      } else {
        this.toaster.warning("Fill the form completely")
      }
    } else {
      this.toaster.warning("Please Login!!")
    }
  }
}
