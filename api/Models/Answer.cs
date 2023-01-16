using System;
using System.Collections.Generic;

namespace businessImprovementAcademy.api.Models
{
    public partial class Answer
    {
        public Answer()
        {
            AnswerItem = new HashSet<AnswerItem>();
        }

        public int Id { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string Email { get; set; }
        public DateTime DateUtc { get; set; }

        public virtual ICollection<AnswerItem> AnswerItem { get; set; }
    }
}
